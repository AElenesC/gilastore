<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class category extends Model
{
    protected $table = 'category';

    protected $primaryKey = 'CategoryId';

    public $incrementing = true;

    protected $keyType = 'int';

    const CREATED_AT = 'Created_at';
    const UPDATED_AT = 'Updated_at';

    protected $fillable = [
        'Name',
        'Description',
        'Created_by',
        'Updated_by'
    ];

    public function products()
    {
        return $this->hasMany(Product::class, 'CategoryId', 'CategoryId');
    }
}
