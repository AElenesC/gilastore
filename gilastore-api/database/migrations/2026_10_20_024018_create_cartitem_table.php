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
        Schema::create('cartitem', function (Blueprint $table) {
            $table->integer('CartItemId', true);
            $table->integer('UserId');
            $table->integer('ProductId')->index('fk_cartitem_product');
            $table->integer('Quantity')->default(1);
            $table->decimal('UnitPrice', 18)->default(0);
            $table->decimal('TotalPrice', 18)->default(0);
            $table->decimal('TotalWeight', 18)->default(0);
            $table->dateTime('CreatedAt')->useCurrent();
            $table->dateTime('UpdatedAt')->useCurrentOnUpdate()->nullable();

            $table->unique(['UserId', 'ProductId'], 'uq_cartitem_user_product');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cartitem');
    }
};
