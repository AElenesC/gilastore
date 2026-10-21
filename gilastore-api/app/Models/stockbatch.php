<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class stockbatch extends Model
{
    protected $table = 'stockbatch';
    protected $primaryKey = 'StockBatchId';
    public $incrementing = true;

    protected $keyType = 'int';

    const CREATED_AT = 'Created_at';
    const UPDATED_AT = 'Updated_at';

    protected $fillable = [
        'ProductId',
        'Batch_Number',
        'Quantity_Start',
        'Quantity_Current',
        'Quantity_Reserved',
        'Cost_Price',
        'Received_At',
        'Status',
        'ImportFile',
        'Created_by',
        'Updated_by',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'ProductId', 'ProductId');
    }

    public function stockBatchesMovements()
    {
        return $this->hasMany(stockmovement::class, 'StockBatchId', 'StockBatchId');
    }
}
