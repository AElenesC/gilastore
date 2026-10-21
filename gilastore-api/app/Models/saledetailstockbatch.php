<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class saledetailstockbatch extends Model
{
    protected $table = 'saledetailstockbatch';

    public $keyType = 'int';

    protected $primaryKey = ['SaleDetailId', 'StockBatchId'];
    public $incrementing = false;

    const CREATED_AT = 'CreatedAt';
    const UPDATED_AT = 'UpdatedAt';

    protected $fillable = [
        'SaleDetailId',
        'StockBatchId',
        'Quantity',
        'Active'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'UserId', 'UserId');
    }

    public function saleDetail()
    {
        return $this->belongsTo(SaleDetail::class, 'SaleDetailId', 'SaleDetailId');
    }

    public function stockBatch()
    {
        return $this->belongsTo(StockBatch::class, 'StockBatchId', 'StockBatchId');
    }
}
