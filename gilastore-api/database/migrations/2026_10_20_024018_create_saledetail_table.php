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
        Schema::create('saledetail', function (Blueprint $table) {
            $table->integer('SaleDetailId', true);
            $table->integer('SaleId')->index('fk_saledetail_sale');
            $table->integer('ProductId')->index('fk_saledetail_product');
            $table->integer('Quantity');
            $table->decimal('UnitPrice', 18);
            $table->decimal('TotalPrice', 18);
            $table->decimal('TotalWeight', 18)->default(0);
            $table->dateTime('CreatedAt')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('saledetail');
    }
};
