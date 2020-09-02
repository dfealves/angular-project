<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Category;
use Illuminate\Database\Eloquent\SoftDeletes;

class Transaction extends Model
{
    use SoftDeletes;
    protected $hidden = ['deleted_at'];
    public function category()
    {
        return $this->belongsTo('\App\Category');
    }
}
