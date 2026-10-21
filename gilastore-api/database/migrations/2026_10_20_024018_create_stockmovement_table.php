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
        Schema::create('stockmovement', function (Blueprint $table) {
            $table->integer('StockMovementId', true);
            $table->integer('StockBatchId')->index('fk_stockmovement_stockbatch');
            $table->string('MovementDirection', 10);
            $table->string('MovementType', 30);
            $table->text('Note')->nullable();
            $table->integer('Quantity');
            $table->dateTime('CreatedAt')->useCurrent();
            $table->integer('CreatedBy')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stockmovement');
    }
};
