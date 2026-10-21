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
        Schema::create('sales', function (Blueprint $table) {
            $table->integer('SaleId', true);
            $table->integer('UserId')->index('fk_sales_user');
            $table->string('OrderNumber', 50)->unique('uq_sales_ordernumber');
            $table->string('IdempotencyKey', 100)->unique('uq_sales_idempotencykey');
            $table->string('Status', 50)->default('PENDING');
            $table->decimal('SubTotal', 18);
            $table->decimal('TaxAmount', 18)->default(0);
            $table->decimal('ShippingCost', 18)->default(0);
            $table->decimal('TotalAmount', 18);
            $table->text('ShippingAddress');
            $table->string('PaymentMethod', 50);
            $table->dateTime('CreatedAt')->useCurrent();
            $table->integer('CreatedBy')->nullable();
            $table->dateTime('UpdatedAt')->useCurrentOnUpdate()->nullable();
            $table->integer('UpdatedBy')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sales');
    }
};
