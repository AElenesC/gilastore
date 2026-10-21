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
        Schema::table('saledetailstockbatch', function (Blueprint $table) {
            $table->foreign(['SaleDetailId'], 'FK_SaleDetailStockBatch_SaleDetail')->references(['SaleDetailId'])->on('saledetail')->onUpdate('restrict')->onDelete('cascade');
            $table->foreign(['StockBatchId'], 'FK_SaleDetailStockBatch_StockBatch')->references(['StockBatchId'])->on('stockbatch')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('saledetailstockbatch', function (Blueprint $table) {
            $table->dropForeign('FK_SaleDetailStockBatch_SaleDetail');
            $table->dropForeign('FK_SaleDetailStockBatch_StockBatch');
        });
    }
};
