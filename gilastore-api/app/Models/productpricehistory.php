<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class productpricehistory extends Model
{
    protected $table = 'productpricehistory';
    protected $primaryKey = 'ProductPriceHistoryId';
    public $incrementing = true;

    protected $keyType = 'int';

    const CREATED_AT = 'Created_at';
    const UPDATED_AT = 'Updated_at';

    protected $fillable = [
        'ProductId',
        'Price',
        'StartDate',
        'EndDate',
        'IsActive',
        'CreatedBy',
        'Updated_by',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'ProductId', 'ProductId');
    }
}
