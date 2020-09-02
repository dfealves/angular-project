<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\TransactionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
//Categories
Route::get('/category', 'CategoryController@index');
Route::get('/category/{id}', 'CategoryController@show');
Route::put('/category/edit/{id}', 'CategoryController@update');
Route::post('/category', 'CategoryController@store');
Route::delete('/category/{id}', 'CategoryController@destroy');



// Transactions
Route::get('/transaction', 'TransactionController@index');
