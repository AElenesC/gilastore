<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
         User::create([
            'Name'       => 'System Administrator',
            'username'   => 'admin',
            'Email'      => 'admin@gilastore.com',
            'password'   => Hash::make('pass123'),
            'Role'       => 'admin',
            'Avatar_Url' => null,
            'CreatedAt' => now(),
            'CreatedBy' => '1',
        ]);

        User::create([
            'Name'       => 'Store Shopper',
            'username'   => 'shopper',
            'Email'      => 'shopper@gilastore.com',
            'password'   => Hash::make('pass123'),
            'Role'       => 'User',
            'Avatar_Url' => null,
            'CreatedAt' => now(),
            'CreatedBy' => "1",
        ]);
    }
}