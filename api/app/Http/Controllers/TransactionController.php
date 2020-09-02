<?php

namespace App\Http\Controllers;

use App\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{

    public function index()
    {
        $transaction = Transaction::all();
        if ($transaction) {
            return response()->json([
                'data' => $transaction,
                'length' => count($transaction)
            ], 200);
        } else {
            return response()->json([
                'status' => 'Error'
            ], 404);
        }
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
