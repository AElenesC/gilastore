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
        Schema::create('users', function (Blueprint $table) {
            $table->integer('UserId', true);
            $table->string('Name', 150);
            $table->string('username', 50)->unique('uq_users_username');
            $table->string('Email', 150)->unique('uq_users_email');
            $table->string('password');
            $table->string('Role', 50);
            $table->string('Avatar_Url')->nullable();
            $table->dateTime('CreatedAt')->useCurrent();
            $table->integer('CreatedBy')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
