<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    protected $table = 'product';
    protected $primaryKey = 'ProductId';
    public $incrementing = true;

    protected $keyType = 'int';

    const CREATED_AT = 'Created_at';
    const UPDATED_AT = 'Updated_at';

    protected $fillable = [
        'Name',
        'SKU',
        'Description',
        'Weight_KG',
        'Price',
        'CategoryId',
        'ImportFile',
        'Created_by',
        'Updated_by'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, 'CategoryId', 'CategoryId');
    }

    public function stockBatches()
    {
        return $this->hasMany(StockBatch::class, 'ProductId', 'ProductId');
    }
}