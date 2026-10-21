<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\SalesController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Middleware\Cors;

Route::middleware([Cors::class, 'api.key'])->group(function () {
    Route::post('/auth/login', [AuthController::class, 'login']);
});

Route::middleware(['api.key', 'auth:api'])->group(function () {
    Route::prefix('auth')->group(function () {
        Route::post('/register', [AuthController::class, 'register']);
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::get('/myprofile', [AuthController::class, 'me']);
        Route::get('/', [AuthController::class, 'index']);
    });

    Route::prefix('products')->group(function(){
        Route::get('/', [ProductController::class, 'index']);
        Route::post('/', [ProductController::class, 'store']);
        route::post('/import', [ProductController::class, 'importCsv']);
        route::get('/importedFileList', [ProductController::class, 'importedCSVFileList']);
        Route::get('/categories', [ProductController::class, 'categoriesGet']);
        Route::get('/search/{query}', [ProductController::class, 'search']);
        Route::get('/{id}', [ProductController::class, 'show']);
        Route::patch('/{id}', [ProductController::class, 'update']);
        Route::delete('/deleteBatch', [ProductController::class, 'destroyMultiple']);
        Route::delete('/{id}', [ProductController::class, 'destroy']);        
    });
    

    Route::prefix('salescart')->group(function () {
        Route::get('/view/{userId}', [SalesController::class, 'cartview']);
        Route::post('/additem', [SalesController::class, 'cartAddManyItem']);
        Route::delete('/removeitem', [SalesController::class, 'cartRemoveItem']);
        Route::post('/increment', [SalesController::class, 'cartItemIncrementQuantity']);
        Route::post('/decrement', [SalesController::class, 'cartItemDecrementQuantity']);
        Route::post('/clear', [SalesController::class, 'cartClear']);
    });

    Route::prefix('sales/order')->group(function() {
        Route::post('/checkout', [SalesController::class, 'createOrder']); 
        Route::get('/allorders', [SalesController::class, 'index']);
        Route::post('/{orderNumber}', [SalesController::class, 'cancelOrder']);
        Route::patch('/{orderNumber}', [SalesController::class, 'updateOrderStatus']);
        Route::get('/{orderNumber}', [SalesController::class, 'showOrder']);
        Route::get('/byuser/{userId}', [SalesController::class, 'getUserOrders']);
    });
});