<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class saledetail extends Model
{
    protected $table = 'saledetail';
    protected $primaryKey = 'SaleDetailId';
    public $incrementing = true;

    protected $keyType = 'int';

    const CREATED_AT = 'CreatedAt';
    const UPDATED_AT = null;

    protected $fillable = [
        'SaleId',
        'ProductId',
        'Quantity',
        'UnitPrice',
        'TotalPrice',
        'TotalWeight'
    ];

    public function sale()
    {
        return $this->belongsTo(Sales::class, 'SaleId', 'SaleId');
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'ProductId', 'ProductId');
    }

    public function stockBatches()
    {
        return $this->hasMany(saledetailstockbatch::class, 'SaleDetailId', 'SaleDetailId');
    }
}
