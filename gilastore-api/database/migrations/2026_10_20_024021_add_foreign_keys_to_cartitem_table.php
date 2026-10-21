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
        Schema::table('cartitem', function (Blueprint $table) {
            $table->foreign(['ProductId'], 'FK_CartItem_Product')->references(['ProductId'])->on('product')->onUpdate('restrict')->onDelete('cascade');
            $table->foreign(['UserId'], 'FK_CartItem_User')->references(['UserId'])->on('users')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('cartitem', function (Blueprint $table) {
            $table->dropForeign('FK_CartItem_Product');
            $table->dropForeign('FK_CartItem_User');
        });
    }
};
