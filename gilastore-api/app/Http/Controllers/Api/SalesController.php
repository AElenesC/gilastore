<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\cartitem;
use App\Models\product;
use App\Models\stockbatch;
use App\Models\User;
use App\Models\sales;
use App\Models\saledetail;
use App\Models\saledetailstockbatch;
use App\Models\cartItemstockbatch;
use App\Models\stockmovement;
use Illuminate\Support\Facades\DB;

class SalesController extends Controller
{
    //------------------------------\\
    //=========SALE METHODS=========\\
    //------------------------------\\
    public function createOrder(Request $request){
        
        $validated = $request->validate([
            'UserId'           => 'required|integer|gt:0',
            'IdempotencyKey'   => 'required|string|max:100',
            'ShippingAddress'  => 'required|string',
            'PaymentMethod'    => 'required|string|max:50',
            'ShippingCost'     => 'nullable|numeric|min:0',
        ]);

        $userId = $validated['UserId'];
        $idempotencyKey = $validated['IdempotencyKey'];

        $existingSale = Sales::where('IdempotencyKey', $idempotencyKey)->first();
        if ($existingSale) {
            return response()->json([
                'status'  => 'success',
                'message' => 'This order has already been processed (Idempotent response).',
                'data'    => $existingSale
            ], 200);
        }

        $cartItems = CartItem::where('UserId', $userId)->get();

        if ($cartItems->isEmpty()) {
            return response()->json([
                'status'  => 'error',
                'message' => 'The cart is empty. Cannot proceed with checkout.'
            ], 422);
        }

        $sale = DB::transaction(function () use ($validated, $userId, $idempotencyKey, $cartItems) {
            
            $subTotal = $cartItems->sum('TotalPrice') ?? 0.00;
            $totalWeight = $cartItems->sum('TotalWeight') ?? 0.00;
            $taxAmount = $subTotal * (env('TAX') / 100) ?? 0.00;
            $shippingCost = ($subTotal * (env('SHIPPINGCOSTPCT') / 100)) * $totalWeight;
            $totalAmount = $subTotal + $taxAmount + $shippingCost;

            $orderNumber = env('SALES_ORD_PREFIX') . date('Ymd') . '-' . strtoupper(substr(uniqid(), -6));

            $sale = Sales::create([
                'UserId'          => $userId,
                'OrderNumber'     => $orderNumber,
                'IdempotencyKey'  => $idempotencyKey,
                'Status'          => 'COMPLETED', // O 'PROCESSING' siespera pasarela de pago externa
                'SubTotal'        => $subTotal,
                'TaxAmount'       => $taxAmount,
                'ShippingCost'    => $shippingCost,
                'TotalAmount'     => $totalAmount,
                'ShippingAddress' => $validated['ShippingAddress'],
                'PaymentMethod'   => $validated['PaymentMethod'],
                'CreatedBy'       => $userId,
            ]);

            foreach ($cartItems as $cartItem) {
                // B. Crear el detalle de la venta (SaleDetail)
                $saleDetail = SaleDetail::create([
                    'SaleId'     => $sale->SaleId,
                    'ProductId'  => $cartItem->ProductId,
                    'Quantity'   => $cartItem->Quantity,
                    'UnitPrice'  => $cartItem->UnitPrice,
                    'TotalPrice' => $cartItem->TotalPrice,
                    'TotalWeight' => $cartItem->TotalWeight
                ]);

                $cartItemBatches = CartItemStockBatch::where('CartItemId', $cartItem->CartItemId)->get();

                foreach ($cartItemBatches as $cartBatch) {
                    SaleDetailStockBatch::create([
                        'SaleDetailId' => $saleDetail->SaleDetailId,
                        'StockBatchId' => $cartBatch->StockBatchId,
                        'Quantity'     => $cartBatch->Quantity,
                        'Active'       => 1
                    ]);

                    $stockBatch = StockBatch::find($cartBatch->StockBatchId);
                    if ($stockBatch) {
                        $stockBatch->update([
                            'Quantity_Reserved' => max(0, $stockBatch->Quantity_Reserved - $cartBatch->Quantity)
                        ]);
                    }

                    stockmovement::create([
                        'StockBatchId' => $cartBatch->StockBatchId,
                        'MovementDirection' => 'Out',
                        'MovementType' => 'Sale',
                        'Note' => $orderNumber,
                        'Quantity' => $cartBatch->Quantity
                    ]);
                }
            }

            $cartItemIds = $cartItems->pluck('CartItemId');
            CartItemStockBatch::whereIn('CartItemId', $cartItemIds)->delete();
            
            CartItem::where('UserId', $userId)->delete();

            return $sale->load('details.stockBatches');
        });

        return response()->json([
            'status'  => 'success',
            'message' => 'Checkout completed successfully.',
            'data'    => $sale
        ], 201);
    }

    public function cancelOrder(string $orderNumber)
    {
        $sale = sales::where('OrderNumber', $orderNumber)
            ->with(['details.stockBatches'])
            ->first();

        if (!$sale) {
            return response()->json([
                'status'  => 'error',
                'message' => 'Sale not found.'
            ], 404);
        }

        if ($sale->Status === 'CANCELLED') {
            return response()->json([
                'status'  => 'error',
                'message' => 'This order has already been cancelled.'
            ], 422);
        }

        DB::transaction(function () use ($sale) {
            $sale->update(['Status' => 'CANCELLED']);

            foreach ($sale->details as $detail) {
                foreach ($detail->stockBatches as $saleBatch) {
                    $stockBatch = stockbatch::find($saleBatch->StockBatchId);

                    if ($stockBatch) {
                        $stockBatch->update([
                            'Quantity_Current' => $stockBatch->Quantity_Current + $saleBatch->Quantity
                        ]);

                        stockmovement::create([
                            'StockBatchId' => $stockBatch->StockBatchId,
                            'MovementDirection' => 'In',
                            'MovementType' => 'SaleCanceled',
                            'Note' => $sale->OrderNumber,
                            'Quantity' => $saleBatch->Quantity
                        ]);                        
                    }

                    saledetailstockbatch::where('SaleDetailId', $saleBatch->SaleDetailId)
                        ->where('StockBatchId', $saleBatch->StockBatchId)
                        ->update(['Active' => 0]);
                }
            }
        });

        return response()->json([
            'status'  => 'success',
            'message' => 'Order cancelled successfully and stock restored to inventory.',
            'data'    => $sale->fresh(['details.stockBatches'])
        ], 200);
    }

    public function updateOrderStatus(Request $request, string $orderNumber)
    {
        $validated = $request->validate([
            'Status' => 'required|string|in:PROCESSING,COMPLETED,SHIPPED,DELIVERED,CANCELLED'
        ]);

        $sale = sales::where('OrderNumber', $orderNumber)->first();

        if (!$sale) {
            return response()->json([
                'status'  => 'error',
                'message' => 'Sale not found.'
            ], 404);
        }

        // Si la orden ya está cancelada, evitamos cambiar su estatus a menos que sea un caso especial
        if ($sale->Status === 'CANCELLED') {
            return response()->json([
                'status'  => 'error',
                'message' => 'Cannot update status of a cancelled order.'
            ], 422);
        }

        $sale->update([
            'Status'    => $validated['Status'],
            'UpdatedBy' => $request->input('UpdatedBy', null) // Opcional si guardas quién realizó el cambio
        ]);

        return response()->json([
            'status'  => 'success',
            'message' => 'Order status updated successfully.',
            'data'    => $sale->fresh(['details.product'])
        ], 200);
    }

    public function index(){
        $saleorders = sales::all();

        return response()->json($saleorders, 200);
    }

    public function showOrder(string $orderNumber){
        $sale = sales::where('OrderNumber', $orderNumber)
        ->with(['user', 'details.product', 'details.stockBatches']) //
        ->first();

        if (!$sale) {
            return response()->json([
                'status'  => 'error',
                'message' => 'Sale not found.'
            ], 404);
        }

        return response()->json([
            'status'  => 'success',
            'message' => 'Sale retrieved successfully.',
            'data'    => $sale
        ], 200);
    }

    public function getUserOrders(int $userId)
    {
        $user = User::find($userId);
        if (!$user) {
            return response()->json([
                'status'  => 'error',
                'message' => 'User not found.'
            ], 404);
        }

        $orders = sales::where('UserId', $userId)
            ->with(['details.product', 'details.stockBatches'])
            ->orderBy('CreatedAt', 'desc')
            ->get();

        if ($orders->isEmpty()) {
            return response()->json([
                'status'  => 'success',
                'message' => 'No orders found for this user.',
                'data'    => []
            ], 200);
        }

        return response()->json([
            'status'  => 'success',
            'message' => 'User orders retrieved successfully.',
            'data'    => $orders
        ], 200);
    }

    //--------------------------------------\\
    //=========SHOPING CART METHODS=========\\
    //--------------------------------------\\
    public function cartview(int $userId){
        $cartItems = CartItem::where('UserId', $userId)
            ->with('product') 
            ->get();

        if ($cartItems->isEmpty()) {
            return response()->json([
                'status'  => 'success',
                'message' => 'The cart is empty.',
                'data'    => [],
                'total_weight' => 0.00,
                'total_cart' => 0.00,
                'tax_amount' => 0.00,
                'shippingCost' => 0.00
            ], 200);
        }

        $formattedItems = $cartItems->map(function ($item) {
            return [
                'CartItemId'  => $item->CartItemId,
                'Quantity'    => $item->Quantity,
                'unitPrice'  => $item->UnitPrice,
                'subtotal'    => $item->TotalPrice,
                'totalWeight' => $item->TotalWeight,
                'product'     => $item->product ? [
                    'ProductId'   => $item->product->ProductId,
                    'Name'        => $item->product->Name,
                    'Description' => $item->product->Description ?? null,
                    'Image'       => $item->product->Image ?? null,
                ] : null
            ];
        });

        $cartTotal = $cartItems->sum('TotalPrice');
        $totalWeight = $cartItems->sum('TotalWeight') ?? 0.00;
        $taxAmount = $cartTotal * (env('TAX') / 100) ?? 0.00;
        $shippingCost = ($cartTotal * (env('SHIPPINGCOSTPCT') / 100)) * $totalWeight;
        $totalAmount = $cartTotal + $taxAmount + $shippingCost;
        
        return response()->json([
            'status'       => 'success',
            'message'      => 'Cart retrieved successfully.',
            'items'        => $formattedItems,
            'total_cart'   => $cartTotal,
            'total_weight' => $totalWeight,                
            'tax_amount' => $taxAmount,
            'shippingCost' => $shippingCost
        ], 200);
    }

    public function cartAddManyItem(Request $request){
        $validated = $request->validate([
            'UserId' => 'required|integer|gt:0',
            'ProductId' => 'required|integer|gt:0',
            'Quantity' => 'required|integer|gt:0'
        ]);
        
        $userId = $validated['UserId'];
        $productId = $validated['ProductId']; 
        $quantity = $validated['Quantity'];

        $product = product::find($productId);

        $cartItem = DB::transaction(function () use ($quantity, $product, $userId) {
            
            $stockBatchAvailable = stockbatch::where('ProductId', $product->ProductId)
                                            ->where('Quantity_Current', '>', '0')
                                            ->orderBy('Created_at', 'desc')
                                            ->get();

            $totalStock = $stockBatchAvailable->sum('Quantity_Current');

            if ($quantity > $totalStock){
                return response()->json([
                    'status'  => 'valerroridationError',
                    'message' => 'There is not stock enough.'
                    ], 422);
            }

            $cartItem = cartitem::where('UserId',$userId)
                                ->where('ProductId', $product->ProductId)
                                ->first();
                    
            if (!$cartItem){
                $cartItem = cartitem::create([
                    'UserId' => $userId,
                    'ProductId' => $product->ProductId,
                    'Quantity' => $quantity,
                    'UnitPrice' => $product->Price,
                    'TotalPrice' => $product->Price * $quantity,
                    'TotalWeight' => $product->Weight_KG * $quantity
                ]);
            } else {
                $cartItem -> update([
                    'Quantity' => $cartItem->Quantity + $quantity,
                    'TotalPrice' => $cartItem->TotalPrice + ($product->Price * $quantity),
                    'TotalWeight' => $product->Weight_KG * ($cartItem->Quantity + $quantity),
                ]);
            }

            foreach ($stockBatchAvailable as $batch){
                if ($quantity <= 0){
                    break;
                }

                $amountToTake = min($quantity, $batch->Quantity_Current);

                $itemBatch = cartItemstockbatch::where('CartItemId', $cartItem->CartItemId)
                    ->where('StockBatchId', $batch->StockBatchId)
                    ->first();

                if ($itemBatch) {
                    cartItemstockbatch::where('CartItemId', $cartItem->CartItemId)
                        ->where('StockBatchId', $batch->StockBatchId)
                        ->update([
                            'Quantity' => $itemBatch->Quantity + $amountToTake,
                            'Active'   => 1
                        ]);
                } else {
                    cartItemstockbatch::create([
                        'CartItemId'   => $cartItem->CartItemId,
                        'StockBatchId' => $batch->StockBatchId,
                        'Quantity'     => $amountToTake,
                        'Active'       => 1
                    ]);
                }

                $batch->update([
                    'Quantity_Reserved' => $batch->Quantity_Reserved + $amountToTake,
                    'Quantity_Current' => $batch->Quantity_Current -  $amountToTake,
                ]);

                $quantity -= $amountToTake;
            }

            $cartItem = cartitem::where('UserId',$userId)                                
                                ->get();

            return $cartItem;
        });

        return response()->json([
                'status'  => 'success',
                'message' => 'Item added successfully to cart.',
                'data' => $cartItem
                ], 201);
    }

    public function cartItemIncrementQuantity(Request $request)
    {
        $validated = $request->validate([
            'UserId'    => 'required|integer|gt:0',
            'ProductId' => 'required|integer|gt:0',
            'IncrementQty' => 'required|integer|gt:0'
        ]);

        $userId = $validated['UserId'];
        $productId = $validated['ProductId'];
        $incrementAmount = $validated['IncrementQty'];

        $product = product::find($productId);

        if (!$product) {
            return response()->json([
                'status'  => 'error',
                'message' => 'Product not found.'
            ], 404);
        }

        $cartResponse = DB::transaction(function () use ($userId, $productId, $incrementAmount, $product) {
        
            $stockBatchAvailable = stockbatch::where('ProductId', $productId)
                ->where('Quantity_Current', '>', 0)
                ->orderBy('Created_at', 'desc')
                ->get();

            $totalStock = $stockBatchAvailable->sum('Quantity_Current');

            if ($totalStock < $incrementAmount) {
                return response()->json([
                    'status'  => 'validationError',
                    'message' => 'There is not stock enough.'
                ], 422);
            }

            $cartItem = cartitem::where('UserId', $userId)
                                ->where('ProductId', $productId)
                                ->first();

            if (!$cartItem) {
                $cartItem = cartitem::create([
                    'UserId'      => $userId,
                    'ProductId'   => $productId,
                    'Quantity'    => $incrementAmount,
                    'UnitPrice'  => $product->Price,
                    'TotalPrice' => $product->Price * $incrementAmount
                ]);
            } else {
                $newQuantity = $cartItem->Quantity + $incrementAmount;
                $cartItem->update([
                    'Quantity'    => $newQuantity,
                    'TotalPrice' => $cartItem->unitPrice * $newQuantity
                ]);
            }

            $remainingToTake = $incrementAmount;

            foreach ($stockBatchAvailable as $batch) {
                if ($remainingToTake <= 0) {
                    break;
                }

                $amountToTake = min($remainingToTake, $batch->Quantity_Current);

                $batch->update([
                    'Quantity_Reserved' => $batch->Quantity_Reserved + $amountToTake,
                    'Quantity_Current'  => $batch->Quantity_Current - $amountToTake,
                ]);

                $itemBatch = cartItemstockbatch::where('CartItemId', $cartItem->CartItemId)
                    ->where('StockBatchId', $batch->StockBatchId)
                    ->first();

                if ($itemBatch) {
                    cartItemstockbatch::where('CartItemId', $cartItem->CartItemId)
                        ->where('StockBatchId', $batch->StockBatchId)
                        ->update([
                            'Quantity' => $itemBatch->Quantity + $amountToTake,
                            'Active'   => 1
                        ]);
                } else {
                    cartItemstockbatch::create([
                        'StockBatchId' => $batch->StockBatchId,
                        'CartItemId'   => $cartItem->CartItemId,
                        'Quantity'     => $amountToTake,
                        'Active'       => 1
                    ]);
                }

                $remainingToTake -= $amountToTake;
            }

            return cartitem::where('UserId', $userId)->get();
        });

        if ($cartResponse instanceof \Illuminate\Http\JsonResponse) {
            return $cartResponse;
        }

        return response()->json([
            'status'  => 'success',
            'message' => 'Item quantity incremented successfully.',
            'data'    => $cartResponse
        ], 200);
    }

    public function cartRemoveItem(Request $request){
        $validated = $request->validate([
            'UserId'    => 'required|integer|gt:0',
            'ProductId' => 'required|integer|gt:0',
        ]);

        $userId = $validated['UserId'];
        $productId = $validated['ProductId'];

        $cartItem = DB::transaction(function () use ($userId, $productId) {
            $cartItem = cartitem::where('UserId', $userId)
                                ->where('ProductId', $productId)
                                ->first();

            if (!$cartItem) {
                return null; 
            }

            $cartItemBatches = cartItemstockbatch::where('CartItemId', $cartItem->CartItemId)->get();

            foreach ($cartItemBatches as $itemBatch) {
                $batch = stockbatch::find($itemBatch->StockBatchId);

                if ($batch) {
                    $batch->update([
                        'Quantity_Current'  => $batch->Quantity_Current + $itemBatch->Quantity,
                        'Quantity_Reserved' => max(0, $batch->Quantity_Reserved - $itemBatch->Quantity),
                    ]);
                }

                cartItemstockbatch::where('CartItemId', $itemBatch->CartItemId)
                ->where('StockBatchId', $itemBatch->StockBatchId)
                ->delete();
            }

            cartitem::where('CartItemId', $cartItem->CartItemId)->delete();

            return cartitem::where('UserId', $userId)->get();
        });

        if (!$cartItem) {
            return response()->json([
                'status'  => 'error',
                'message' => 'The item was not found in the cart.'
            ], 404);
        }

        return response()->json([
            'status'  => 'success',
            'message' => 'Item removed successfully from cart and stock restored.',
            'data'    => $cartItem
        ], 200);
    }

    public function cartItemDecrementQuantity(Request $request)
    {
        $validated = $request->validate([
            'UserId'       => 'required|integer|gt:0',
            'ProductId'    => 'required|integer|gt:0',
            'DecrementQty' => 'required|integer|gt:0'
        ]);

        $userId = $validated['UserId'];
        $productId = $validated['ProductId'];
        $decrementAmount = $validated['DecrementQty'];

        $product = product::find($productId);

        if (!$product) {
            return response()->json([
                'status'  => 'error',
                'message' => 'Product not found.'
            ], 404);
        }

        $cartResponse = DB::transaction(function () use ($userId, $productId, $decrementAmount) {
        
            $cartItem = cartitem::where('UserId', $userId)
                                ->where('ProductId', $productId)
                                ->first();

            if (!$cartItem) {
                return response()->json([
                    'status'  => 'error',
                    'message' => 'Item not found in cart.'
                ], 404);
            }

            if ($decrementAmount > $cartItem->Quantity) {
                return response()->json([
                    'status'  => 'validationError',
                    'message' => 'The decrement quantity exceeds the current quantity in cart.'
                ], 422);
            }

            $itemBatches = cartItemstockbatch::where('CartItemId', $cartItem->CartItemId)
                ->orderBy('StockBatchId', 'desc')
                ->get();

            $remainingToDecrement = $decrementAmount;

            foreach ($itemBatches as $itemBatch) {
                if ($remainingToDecrement <= 0) {
                    break;
                }

                $amountToReturn = min($remainingToDecrement, $itemBatch->Quantity);

                $batch = stockbatch::find($itemBatch->StockBatchId);
                if ($batch) {
                    $batch->update([
                        'Quantity_Current'  => $batch->Quantity_Current + $amountToReturn,
                        'Quantity_Reserved' => max(0, $batch->Quantity_Reserved - $amountToReturn),
                    ]);
                }

                if ($itemBatch->Quantity == $amountToReturn) {
                    cartItemstockbatch::where('CartItemId', $cartItem->CartItemId)
                        ->where('StockBatchId', $itemBatch->StockBatchId)
                        ->delete();
                } else {
                    cartItemstockbatch::where('CartItemId', $cartItem->CartItemId)
                        ->where('StockBatchId', $itemBatch->StockBatchId)
                        ->update([
                            'Quantity' => $itemBatch->Quantity - $amountToReturn
                        ]);
                }

                $remainingToDecrement -= $amountToReturn;
            }

            $newQuantity = $cartItem->Quantity - $decrementAmount;

            if ($newQuantity <= 0) {
                $cartItem->delete();
            } else {
                $cartItem->update([
                    'Quantity'    => $newQuantity,
                    'totalPrice' => $cartItem->unitPrice * $newQuantity
                ]);
            }

            return cartitem::where('UserId', $userId)->get();
        });

        if ($cartResponse instanceof \Illuminate\Http\JsonResponse) {
            return $cartResponse;
        }

        return response()->json([
            'status'  => 'success',
            'message' => 'Item quantity decremented successfully.',
            'data'    => $cartResponse
        ], 200);
    }

    public function cartClear(Request $request)
    {
        $validated = $request->validate([
            'UserId' => 'required|integer|gt:0',
        ]);

        $userId = $validated['UserId'];

        $result = DB::transaction(function () use ($userId) {
            $cartItems = cartitem::where('UserId', $userId)->get();

            if ($cartItems->isEmpty()) {
                return false;
            }

            foreach ($cartItems as $cartItem) {
                $cartItemBatches = cartItemstockbatch::where('CartItemId', $cartItem->CartItemId)->get();

                foreach ($cartItemBatches as $itemBatch) {
                    $batch = stockbatch::find($itemBatch->StockBatchId);

                    if ($batch) {
                        $batch->update([
                            'Quantity_Current'  => $batch->Quantity_Current + $itemBatch->Quantity,
                            'Quantity_Reserved' => max(0, $batch->Quantity_Reserved - $itemBatch->Quantity),
                        ]);
                    }
                }

                cartItemstockbatch::where('CartItemId', $cartItem->CartItemId)->delete();
            }

            cartitem::where('UserId', $userId)->delete();

            return true;
        });

        if (!$result) {
            return response()->json([
                'status'  , 'error',
                'message' => 'The cart is already empty.',
                'data'    => []
            ], 404);
        }

        return response()->json([
            'status'  => 'success',
            'message' => 'Cart cleared successfully and stock restored.',
            'data'    => []
        ], 200);
    }
}
