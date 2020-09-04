<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
})->middleware('auth:api');

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
    function () {
        Route::post('login', 'AuthController@login')->name('login');
        Route::post('register', 'AuthController@register');
        Route::post('logout', 'AuthController@logout');
        Route::post('refresh', 'AuthController@refresh');
        Route::get('user-profile', 'AuthController@userProfile');
    }
);


Route::middleware('auth:api')->group(function () {
    //Categories
    Route::get('category', 'CategoryController@index');
    Route::get('category/{id}', 'CategoryController@show');
    Route::put('category/edit/{id}', 'CategoryController@update');
    Route::post('category', 'CategoryController@store');
    Route::delete('category/{id}', 'CategoryController@destroy');
    // Transactions
    Route::get('transaction', 'TransactionController@index');
});
