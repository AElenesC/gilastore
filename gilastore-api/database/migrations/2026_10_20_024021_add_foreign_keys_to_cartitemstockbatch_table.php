<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('cartitemstockbatch', function (Blueprint $table) {
            $table->foreign(['CartItemId'], 'FK_CartItemStockBatch_CartItem')->references(['CartItemId'])->on('cartitem')->onUpdate('restrict')->onDelete('cascade');
            $table->foreign(['StockBatchId'], 'FK_CartItemStockBatch_StockBatch')->references(['StockBatchId'])->on('stockbatch')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('cartitemstockbatch', function (Blueprint $table) {
            $table->dropForeign('FK_CartItemStockBatch_CartItem');
            $table->dropForeign('FK_CartItemStockBatch_StockBatch');
        });
    }
};
