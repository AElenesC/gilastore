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
        Schema::create('product', function (Blueprint $table) {
            $table->integer('ProductId', true);
            $table->string('Name', 150);
            $table->string('SKU', 50)->unique('uq_product_sku');
            $table->text('Description')->nullable();
            $table->decimal('Weight_KG', 8, 3)->default(0);
            $table->decimal('Price', 18)->default(0);
            $table->integer('CategoryId')->index('fk_product_category');
            $table->string('importFile')->nullable();
            $table->dateTime('Created_at')->useCurrent();
            $table->integer('Created_by')->nullable();
            $table->dateTime('Updated_at')->useCurrentOnUpdate()->nullable();
            $table->integer('Updated_by')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product');
    }
};
