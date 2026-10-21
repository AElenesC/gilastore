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
        Schema::create('productpricehistory', function (Blueprint $table) {
            $table->integer('ProductPriceHistoryId', true);
            $table->integer('ProductId')->index('fk_productpricehistory_product');
            $table->decimal('Price', 18);
            $table->dateTime('StartDate');
            $table->dateTime('EndDate')->nullable();
            $table->boolean('IsActive')->default(true);
            $table->dateTime('CreatedAt')->useCurrent();
            $table->integer('CreatedBy')->nullable();
            $table->dateTime('Updated_at')->useCurrentOnUpdate()->nullable();
            $table->integer('Updated_by')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('productpricehistory');
    }
};
