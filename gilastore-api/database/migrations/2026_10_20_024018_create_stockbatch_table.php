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
        Schema::create('stockbatch', function (Blueprint $table) {
            $table->integer('StockBatchId', true);
            $table->integer('ProductId');
            $table->unsignedInteger('Batch_Number');
            $table->integer('Quantity_Start');
            $table->integer('Quantity_Current');
            $table->integer('Quantity_Reserved')->default(0);
            $table->decimal('Cost_Price', 18);
            $table->dateTime('Received_At')->useCurrent();
            $table->string('Status', 50)->default('ACTIVE');
            $table->string('importFile')->nullable();
            $table->dateTime('Created_at')->useCurrent();
            $table->integer('Created_by')->nullable();
            $table->dateTime('Updated_at')->useCurrentOnUpdate()->nullable();
            $table->integer('Updated_by')->nullable();

            $table->unique(['ProductId', 'Batch_Number'], 'uq_product_batch');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stockbatch');
    }
};
