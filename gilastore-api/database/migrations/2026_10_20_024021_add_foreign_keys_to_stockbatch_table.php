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
        Schema::table('stockbatch', function (Blueprint $table) {
            $table->foreign(['ProductId'], 'FK_StockBatch_Product')->references(['ProductId'])->on('product')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('stockbatch', function (Blueprint $table) {
            $table->dropForeign('FK_StockBatch_Product');
        });
    }
};
