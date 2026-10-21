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
        Schema::create('saledetailstockbatch', function (Blueprint $table) {
            $table->integer('SaleDetailId');
            $table->integer('StockBatchId')->index('fk_saledetailstockbatch_stockbatch');
            $table->integer('Quantity');
            $table->boolean('Active')->default(true);
            $table->dateTime('CreatedAt')->useCurrent();
            $table->dateTime('UpdatedAt')->useCurrentOnUpdate()->nullable();

            $table->primary(['SaleDetailId', 'StockBatchId']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('saledetailstockbatch');
    }
};
