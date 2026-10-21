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
        Schema::create('cartitemstockbatch', function (Blueprint $table) {
            $table->integer('CartItemId');
            $table->integer('StockBatchId')->index('fk_cartitemstockbatch_stockbatch');
            $table->integer('Quantity');
            $table->boolean('Active')->default(true);

            $table->primary(['CartItemId', 'StockBatchId']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cartitemstockbatch');
    }
};
