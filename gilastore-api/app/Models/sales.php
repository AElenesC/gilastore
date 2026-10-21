<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class sales extends Model
{
    protected $table = 'sales';
    protected $primaryKey = 'SaleId';
    public $incrementing = true;

    protected $keyType = 'int';

    const CREATED_AT = 'CreatedAt';
    const UPDATED_AT = 'UpdatedAt';

    protected $fillable = [
        'UserId',
        'OrderNumber',
        'IdempotencyKey',
        'Status',
        'SubTotal',
        'TaxAmount',
        'ShippingCost',
        'TotalAmount',
        'ShippingAddress',
        'PaymentMethod',
        'CreatedBy',
        'UpdatedBy'
    ];

    protected $casts = [
        'SubTotal'     => 'decimal:2',
        'TaxAmount'    => 'decimal:2',
        'ShippingCost' => 'decimal:2',
        'TotalAmount'  => 'decimal:2'      
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'UserId', 'UserId');
    }

    public function details()
    {
        return $this->hasMany(saledetail::class, 'SaleId', 'SaleId');
    }
}
