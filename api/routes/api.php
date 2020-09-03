<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\TransactionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::any('unauthorized', function () {
    return response()->json([
        'status' => 'Unauthorized'
    ], 401);
})->name('unauthorized');

Route::group(
    [
        'middleware' => 'api',
        'prefix' => 'auth'
    ],
    function ($router) {
        Route::post('login', 'AuthController@login')->name('login');
        Route::post('register', 'AuthController@register');
        Route::post('logout', 'AuthController@logout');
        Route::post('refresh', 'AuthController@refresh');
        Route::get('user-profile', 'AuthController@userProfile');
    }
);
//Categories
Route::get('/category', 'CategoryController@index');
Route::get('/category/{id}', 'CategoryController@show');
Route::put('/category/edit/{id}', 'CategoryController@update');
Route::post('/category', 'CategoryController@store');
Route::delete('/category/{id}', 'CategoryController@destroy');



// Transactions
Route::get('/transaction', 'TransactionController@index');
