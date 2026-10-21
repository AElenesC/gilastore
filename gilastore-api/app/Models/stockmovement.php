<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class stockmovement extends Model
{
    protected $table = 'stockmovement';
    protected $primaryKey = 'StockMovementId';
    public $incrementing = true;

    protected $keyType = 'int';

    const CREATED_AT = 'CreatedAt';
    const UPDATED_AT = null;

    protected $fillable = [
        'StockBatchId',
        'MovementDirection',
        'MovementType',
        'Note',
        'Quantity',
        'CreatedBy'
    ];

    public function stockBatch()
    {
        return $this->belongsTo(StockBatch::class, 'StockBatchId', 'StockBatchId');
    }
}
