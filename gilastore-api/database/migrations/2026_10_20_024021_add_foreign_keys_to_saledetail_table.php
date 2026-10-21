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
        Schema::table('saledetail', function (Blueprint $table) {
            $table->foreign(['ProductId'], 'FK_SaleDetail_Product')->references(['ProductId'])->on('product')->onUpdate('restrict')->onDelete('restrict');
            $table->foreign(['SaleId'], 'FK_SaleDetail_Sale')->references(['SaleId'])->on('sales')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('saledetail', function (Blueprint $table) {
            $table->dropForeign('FK_SaleDetail_Product');
            $table->dropForeign('FK_SaleDetail_Sale');
        });
    }
};
