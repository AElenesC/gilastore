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
        Schema::create('category', function (Blueprint $table) {
            $table->integer('CategoryId', true);
            $table->string('Name', 150)->unique('uq_category_name');
            $table->text('Description')->nullable();
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
        Schema::dropIfExists('category');
    }
};
