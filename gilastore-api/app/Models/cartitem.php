<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class cartitem extends Model
{
    protected $table = 'cartitem';
    protected $primaryKey = 'CartItemId';
    public $incrementing = true;

    protected $keyType = 'int';

    const CREATED_AT = 'CreatedAt';
    const UPDATED_AT = 'UpdatedAt';

    protected $fillable = [
        'UserId',
        'ProductId',
        'Quantity',
        'UnitPrice',
        'TotalPrice',
        'TotalWeight'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'UserId', 'UserId');
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'ProductId', 'ProductId');
    }
}
