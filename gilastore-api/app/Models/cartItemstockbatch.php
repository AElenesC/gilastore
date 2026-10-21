<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class cartItemstockbatch extends Model
{
    protected $table = 'cartitemstockbatch';
    public $incrementing = false;
    public $timestamps = false;
    protected $fillable = [
        'CartItemId',
        'StockBatchId',
        'Quantity',
        'Active',
    ];

    protected $casts = [
        'Active' => 'boolean'
    ];
}
