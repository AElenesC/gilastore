<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\category;
use App\Models\StockBatch;
use App\Models\stockmovement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 15);
        $products = Product::with('category')->paginate($perPage);

        return response()->json($products, 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'        => 'required|string|max:150',
            'sku'         => 'required|string|max:50|unique:product,SKU',
            'description' => 'nullable|string',
            'weight_kg'   => 'nullable|numeric|min:0',
            'price'       => 'required|numeric|min:0',
            'CategoryId'  => 'required|integer|exists:category,CategoryId',
            'ImportFile'  => 'nullable|string|max:255',
            'Created_by'  => 'nullable|integer|exists:users,UserId',
            'initial_stock' => 'required|integer|gt:0'
        ]);
        
        $product = DB::transaction(function () use ($validated) {
            $newProd = $this->productCreate($validated);
            $dataBatchStock["ProductId"] = $newProd->ProductId;
            $dataBatchStock["Batch_Number"] = 1;
            $dataBatchStock["Cost_Price"] = $validated['price'];
            $dataBatchStock["stock"] = $validated['initial_stock'];
            $dataBatchStock["importFile"] = '';
            $dataBatchStock["Created_by"] = $validated['Created_by']; 

            $stockBatch = $this->stockBatchCreate($dataBatchStock);

            return $newProd;
        });
            
        return response()->json($product->load(['category', 'stockBatches']), 201);
    }

    public function importCsv(Request $request)
    {        
        $validator = Validator::make($request->all(), [
            'file' => 'required|File|mimes:csv|max:10240',
            'user_id' => 'required|integer|gt:0'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status'  => 'error',
                'errors'  => $validator->errors()
            ], 422);
        }
        
        $file = $request->file('file');

        $fileName = $file->getClientOriginalName();
        $existsInProducts = Product::where('importFile', $fileName)->exists();
        $existsInBatches = StockBatch::where('importFile', $fileName)->exists();

        if ($existsInProducts || $existsInBatches) {
            return response()->json([
                'status'  => 'error',
                'message' => 'This file has already been imported.',
                'errors'  => [
                    'file' => ['A file with this name has already been processed.']
                ]
            ], 422);
        }

        $handle = fopen($file->getRealPath(), 'r');

        if (!$handle) {
            return response()->json([
                'status'  => 'error',
                'message' => 'The CSV file could not be opened.'
            ], 500);
        }

        $header = fgetcsv($handle, 1000, ',');
        
        $header = array_map(function($col) {
            return trim(preg_replace('/\x{FEFF}/u', '', $col));
        }, $header);

        $errors = [];
        $lineNumber = 1;
        $validRows = [];
        
        while (($row = fgetcsv($handle, 1000, ',')) !== false) {
            $lineNumber++;

            if (empty(array_filter($row))) {
                continue;
            }

            if (count($header) !== count($row)) {
                $errors[] = "Line {$lineNumber}: Column count does not match with header.";
                continue;
            }

            $data = array_combine($header, $row);                        
            $data['price'] = isset($data['price']) ?  str_replace(['$', ',', 'free'], '', trim($data['price'])) : null;            
            $data['price'] = ($data['price'] === '') ? 0 : $data['price'];

            $rowValidator = Validator::make($data, [
                    'name'        => 'required|string|max:150',
                    'sku'         => 'required|string|max:50',                    
                    'description' => 'nullable|string',
                    'category'    => 'required|string',
                    'price'       => 'required|numeric|min:0',
                    'stock'       => 'required|integer|gt:0',
                    'weight_kg'   => 'nullable|numeric|min:0',                    
                ]); 

            if ($rowValidator->fails()) {                    
                $errors[] = "Line {$lineNumber} (SKU: " . ($data['sku'] ?? 'N/A') . "): " . implode(', ', $rowValidator->errors()->all());
                continue;
            } 

            if ($this->containsMalicousData($data)){
                $errors[] = "Line {$lineNumber}: contains potential malicious code.";
                continue;
            }

            if ($this->containsSqlInjection($data)){
                $errors[] = "Line {$lineNumber}: contains potential sql injection code.";
                continue;
            }
                
            $categoryId = Category::where('Name', $data['category'])->value('CategoryId');
                
            if (!$categoryId) {
                $errors[] = "Line {$lineNumber} (SKU: " . ($data['sku'] ?? 'N/A') . "): Category : " . $data['category'] . " does not exists.";
                continue;
            } else {
                $data['CategoryId'] = $categoryId;
            }
            $validRows[] = $data;
        }

        if (is_resource($handle)) {
            fclose($handle);
        }
        
        if ($errors){            
            return response()->json(['status' => 'Error',
                                    'invalidRows' => $errors], 
                                    422);
        } 
        
        try{
            
            $products = DB::transaction(function () use ($validRows, $fileName){
                $productsNew = [];
                $productsUpdated = [];
                while ($data = array_shift($validRows)) {
                    $data['importFile'] = $fileName;
                    $data['Created_by'] = 1;
                    $product = Product::where('SKU', trim($data['sku']))->first();                    
                    if (!$product) {    
                        $product = $this->productCreate($data);     
                        $data['ProductId'] = $product->ProductId;
                        $data['Batch_Number'] = 1;
                        $batchStok = $this->stockBatchCreate($data);
                        $productsNew[] = $product;                         
                    }
                    else {
                        if (isset($data['stock']) && is_numeric($data['stock']) && $data['stock'] <= 0){
                            $this->stockBatchCreate($data);
                        }

                        $product = $this->productUpdate($product, $data);
                        if ($product){
                            $productsUpdated[] = $product;
                        }
                    }            
                }

                return [$productsNew, $productsUpdated];
            });

            return response()->json([
                'status'        => 'success',
                'message'       => ($products[0]) ?  'CSV file successfully processed.' : 'No new product records processed.',
                'inserted'      => $products[0],
                'updated'       => $products[1],
                'total_errors'  => count($errors),
                'errors'        => $errors,
            ], 200);

        } catch (\Exception $e) {            
            return response()->json([
                'status'  => 'error',
                'message' => 'An error occurred while processing the CSV file. ',
                'error'   => $e->getMessage()
            ], 500);
        }        
    }

    public function importedCSVFileList(Request $request){
        try {
            $imports = DB::table('StockBatch')
            ->select(
                'importFile',
                DB::raw('MIN(Created_at) as imported_at'), 
                DB::raw('COUNT(DISTINCT ProductId) as total_products'), 
                DB::raw('SUM(Quantity_Start) as total_initial_stock') 
            )
            ->whereNotNull('importFile')
            ->groupBy('importFile')
            ->orderBy('imported_at', 'desc')
            ->get();

            return response()->json([
                'status' => 'success',
                'message' => 'List of imported files retrieved successfully.',
                'total' => $imports->count(),
                'data' => $imports
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'An error occurred while retrieving the CSV list.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function show(int $id)
    {
        $product = Product::with('category')->find($id);

        if (!$product)
        {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json($product, 200);
    }

    public function search(string $query)
    {
        $products = Product::where(function ($q) use ($query) {
                $q->where('Name', 'like', "%{$query}%")
                ->orWhere('Description', 'like', "%{$query}%")
                ->orWhere('SKU', 'like', "%{$query}%");
            })
            ->paginate(15);

        return response()->json([
            'status' => 'success',
            'data' => $products
        ], 200);
    }

    public function update(Request $request, string $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        $validated = $request->validate([
            'Name'        => 'sometimes|required|string|max:150',
            'SKU'         => 'sometimes|required|string|max:50|unique:product,SKU,' . $id . ',ProductId',
            'Description' => 'sometimes|nullable|string', 
            'Weight_KG'   => 'sometimes|numeric|min:0',
            'Price'       => 'sometimes|required|numeric|min:0',
            'CategoryId'  => 'sometimes|required|integer|exists:category,CategoryId',
            'Updated_by'  => 'nullable|integer|exists:users,UserId',
        ]);

        $product->update($validated);

        return response()->json($product->load('category'), 200);
    }

    public function destroy(int $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        
        $stockBatch = StockBatch::where('ProductId', $product->ProductId)->get();
        
        foreach ($stockBatch as $batch) {
            stockmovement::where('StockBatchId', $batch->StockBatchId)->delete();
            $batch->delete();
        }
        
        $product->delete();

        return response()->json(['message' => 'Product deleted successfully'], 200);
    }

    public function destroyMultiple(Request $request)
    {
        $validated = $request->validate([
            'ids'   => 'required|array|min:1',
            'ids.*' => 'integer|exists:Product,ProductId',
        ]);

        $ids = $validated['ids'];

        $deleteStockBatch = StockBatch::whereIn('ProductId', $ids)->delete();
        $deletedCount = Product::whereIn('ProductId', $ids)->delete();

        return response()->json([
            'status'  => 'success',
            'message' => "Se eliminaron {$deletedCount} productos correctamente.",
            'product_deleted_count' => $deletedCount,
            'stockBatch_deleted_count' => $deleteStockBatch
        ], 200);
    }

    public function categoriesGet(){
        try {
            $categories = category::select('CategoryId', 'Name', 'Description')
                ->orderBy('Name', 'asc')
                ->get();

            return response()->json([
                'status'  => 'success',
                'message' => 'Categories retrieved successfully.',
                'total'   => $categories->count(),
                'data'    => $categories,
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'status'  => 'error',
                'message' => 'An error occurred while retrieving categories.',
                'error'   => $e->getMessage(),
            ], 500);
        }
    }
    /*
    PRIVATE METHODS
    */
    private function productCreate(array $data): Product
    {
            $product = Product::create([
                'Name'        => $data['name'],
                'SKU'         => $data['sku'],
                'Description' => $data['description'] ?? null,
                'Weight_KG'   => !empty($data['weight_kg']) ? (float)$data['weight_kg'] : 0.0,
                'Price'       => $data['price'],
                'CategoryId'  => $data['CategoryId'],
                'ImportFile'  => $data['importFile'] ?? null,
                'Created_by'  => $data['Created_by'] ?? null,    
            ]);

           if (isset($data['Stock']) && is_numeric($data['Stock']) && $data['Stock'] >= 0){
                $stockBatch = StockBatch::create([
                    'ProductId'          => $product->ProductId,
                    'Batch_Number'       => $this->stockBatchNewBatchNumber($product->ProductId),
                    'Quantity_Start'     => $data['Stock'],
                    'Quantity_Current'   => $data['Stock'],
                    'Quantity_Reserved'  => 0,
                    'Cost_Price'         => $data['Price'],
                    'Status'             => 'ACTIVE',
                    'ImportFile'         => $data['importFile'] ?? null,
                    'Created_by'         => $data['Created_by'] ?? null,
                ]);

                stockmovement::create([
                    'StockBatchId'  => $stockBatch->StockBatchId,
                    'MovementDirection' => 'In',
                    'MovementType' => 'Adquisition',
                    'Note' => 'New Product',
                    'Quantity' =>  $data['Stock'],
                    'Created_by' => $data['Created_by'] ?? null,
                ]);
            }
        
        return $product;
    }

    private function productUpdate(Product $product, array $data): ?Product
    {
        $updateData = [
            'Name'        => $data['Name'] ?? $product->Name,
            'SKU'         => $data['SKU'] ?? $product->SKU,
            'Description' => array_key_exists('Description', $data) ? $data['Description'] : $product->Description,
            'Weight_KG'   => $data['Weight_KG'] ?? $product->Weight_KG,
            'Price'       => $data['Price'] ?? $product->Price,
            'CategoryId'  => $data['CategoryId'] ?? $product->CategoryId,
            'Updated_by'  => $data['Updated_by'] ?? $product->Updated_by,
        ];

        $product->fill($updateData);
        $hasOtherChanges = $product->isDirty();

        $newImportFile = $data['importFile'] ?? $data['ImportFile'] ?? null;

        if (!empty($newImportFile) && $newImportFile !== $product->importFile) {
            if ($hasOtherChanges) {
                $product->importFile = $newImportFile;
            }
        }

        if ($product->isDirty()) {
            $product->save();
            return $product;
        }        
        
        return null;
    }

    private function stockBatchCreate(array $data): StockBatch
    {
        $stockBatch = StockBatch::create([
            'ProductId'        => $data['ProductId'],
            'Batch_Number'     => $data['Batch_Number'],
            'Quantity_Start'   => $data['initial_stock'] ?? $data['stock'],
            'Quantity_Current' => $data['initial_stock'] ?? $data['stock'],
            'Quantity_Reserved'=> 0,
            'Cost_Price'       => $data['Cost_Price'] ?? $data['price'],
            'Received_At'      => $data['Received_At'] ?? now(),
            'Status'           => $data['Status'] ?? 'ACTIVE',
            'importFile'       => $data['importFile'] ?? $data['ImportFile'] ?? null,
            'Created_by'       => $data['Created_by'] ?? null,
        ]);

        if ($stockBatch){
            stockmovement::create([
                'StockBatchId'  => $stockBatch->StockBatchId,
                'MovementDirection' => 'In',
                'MovementType' => 'Adquisition',
                'Note' => 'New Product',
                'Quantity' =>  $stockBatch->Quantity_Start,
                'Created_by' => $stockBatch->Created_by,
            ]);
        }
        
        return $stockBatch;
    }

    private function stockBatchNewBatchNumber(int $productId): int{
        $lastBatch = StockBatch::where('ProductId', $productId)
        ->orderBy('StockBatchId', 'desc')
        ->value('Batch_Number');

        $nextNumber = 1;

        if ($lastBatch){
            $nextNumber = $lastBatch + 1;
        }

        return $nextNumber;
    }

    private function containsMalicousData($rawDataRow){
        if (!is_array($rawDataRow)) {
            return false;
        }
        foreach ($rawDataRow as $value) {
            if ($value !== null) {
                $stringValue = (string) $value;
                
                if (strip_tags($stringValue) !== $stringValue) {
                    return true;
                }
            }
        }
        return false;
    }

    private function containsSqlInjection($rawDataRow) {
        if (!is_array($rawDataRow)) {
            return false;
        }

        $sqlPatterns = [
            '/(%27)|(\')|(--)|(%23)|(#)/i',
            '/(?:\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER|TRUNCATE|CREATE)\b)/i',
            '/\b(OR|AND)\b\s+[\d\w]+\s*=\s*[\d\w]+/i',
            '/(\bUNION\b\s+\bSELECT\b)/i'
        ];

        foreach ($rawDataRow as $value) {
            if ($value !== null) {
                $stringValue = (string) $value;
                
                foreach ($sqlPatterns as $pattern) {
                    if (preg_match($pattern, $stringValue)) {
                        return true;
                    }
                }
            }
        }

        return false;
    }
}
