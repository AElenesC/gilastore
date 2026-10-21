<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        // 1. Usuario Administrador
        User::create([
            'Name'       => 'System Administrator',
            'username'   => 'admin',
            'Email'      => 'admin@gilastore.com',
            'password'   => Hash::make('pass123'),
            'Role'       => 'admin',
            'Avatar_Url' => null,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // 2. Usuario Comprador (Shopper)
        User::create([
            'Name'       => 'Store Shopper',
            'username'   => 'shopper',
            'Email'      => 'shopper@gilastore.com',
            'password'   => Hash::make('pass123'),
            'Role'       => 'User',
            'Avatar_Url' => null,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}