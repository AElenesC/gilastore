<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('category')->insert([
            ['CategoryId' => 1, 'Name' => 'Accessories', 'Description' => 'Category for Accessories', 'Created_at' => now(), 'Created_by' => 1, 'Updated_at' => now(), 'Updated_by' => 1],
            ['CategoryId' => 2, 'Name' => 'Beauty', 'Description' => 'Category for Beauty', 'Created_at' => now(), 'Created_by' => 1, 'Updated_at' => now(), 'Updated_by' => 1],
            ['CategoryId' => 3, 'Name' => 'Books', 'Description' => 'Category for Books', 'Created_at' => now(), 'Created_by' => 1, 'Updated_at' => now(), 'Updated_by' => 1],
            ['CategoryId' => 4, 'Name' => 'Clothing', 'Description' => 'Category for Clothing', 'Created_at' => now(), 'Created_by' => 1, 'Updated_at' => now(), 'Updated_by' => 1],
            ['CategoryId' => 5, 'Name' => 'Electronics', 'Description' => 'Category for Electronics', 'Created_at' => now(), 'Created_by' => 1, 'Updated_at' => now(), 'Updated_by' => 1],
            ['CategoryId' => 6, 'Name' => 'Food & Beverage', 'Description' => 'Category for Food & Beverage', 'Created_at' => now(), 'Created_by' => 1, 'Updated_at' => now(), 'Updated_by' => 1],
            ['CategoryId' => 7, 'Name' => 'Footwear', 'Description' => 'Category for Footwear', 'Created_at' => now(), 'Created_by' => 1, 'Updated_at' => now(), 'Updated_by' => 1],
            ['CategoryId' => 8, 'Name' => 'Games', 'Description' => 'Category for Games', 'Created_at' => now(), 'Created_by' => 1, 'Updated_at' => now(), 'Updated_by' => 1],
            ['CategoryId' => 9, 'Name' => 'Gifts', 'Description' => 'Category for Gifts', 'Created_at' => now(), 'Created_by' => 1, 'Updated_at' => now(), 'Updated_by' => 1],
            ['CategoryId' => 10, 'Name' => 'Health', 'Description' => 'Category for Health', 'Created_at' => now(), 'Created_by' => 1, 'Updated_at' => now(), 'Updated_by' => 1],
            ['CategoryId' => 11, 'Name' => 'Home & Office', 'Description' => 'Category for Home & Office', 'Created_at' => now(), 'Created_by' => 1, 'Updated_at' => now(), 'Updated_by' => 1],
            ['CategoryId' => 12, 'Name' => 'Kitchen', 'Description' => 'Category for Kitchen', 'Created_at' => now(), 'Created_by' => 1, 'Updated_at' => now(), 'Updated_by' => 1],
            ['CategoryId' => 13, 'Name' => 'Misc', 'Description' => 'Category for Misc', 'Created_at' => now(), 'Created_by' => 1, 'Updated_at' => now(), 'Updated_by' => 1],
            ['CategoryId' => 14, 'Name' => 'Outdoors', 'Description' => 'Category for Outdoors', 'Created_at' => now(), 'Created_by' => 1, 'Updated_at' => now(), 'Updated_by' => 1],
            ['CategoryId' => 15, 'Name' => 'Pets', 'Description' => 'Category for Pets', 'Created_at' => now(), 'Created_by' => 1, 'Updated_at' => now(), 'Updated_by' => 1],
            ['CategoryId' => 16, 'Name' => 'Sports', 'Description' => 'Category for Sports', 'Created_at' => now(), 'Created_by' => 1, 'Updated_at' => now(), 'Updated_by' => 1],
            ['CategoryId' => 17, 'Name' => 'Stationery', 'Description' => 'Category for Stationery', 'Created_at' => now(), 'Created_by' => 1, 'Updated_at' => now(), 'Updated_by' => 1],
            ['CategoryId' => 18, 'Name' => 'Tools', 'Description' => 'Category for Tools', 'Created_at' => now(), 'Created_by' => 1, 'Updated_at' => now(), 'Updated_by' => 1],
        ]);
    }
}
