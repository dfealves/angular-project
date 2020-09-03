<?php

namespace App\Http\Controllers;

use App\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|min:4|max:200',
            'description' => 'nullable|max:250',
            'price' => 'required|numeric',
            'type' => 'required|integer',
            'category_id' => 'required|exists:categories,id'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }
        //Post Transaction
        $trans = new Transaction();
        $trans->title = $request->title;
        $trans->description = $request->description;
        $trans->price = $request->price;
        $trans->type = $request->type;
        $trans->category_id = $request->category_id;
        $trans->save();
        //End Post
        if ($trans) {
            return response()->json([
                'data' => $request->all(),
                'success' => true,
                'last_insert_id' => $trans->id
            ], 201);
        } else {
            return response()->json([
                'error' => 'Resource not found'
            ], 404);
        }
    }

    public function show($id)
    {
        $trans = Transaction::find($id);
        $trans->category;

        if ($trans) {
            return response()->json($trans->makeHidden(['category_id']), 200);
        } else {
            return response()->json([
                'error' => 'Resource not found'
            ], 404);
        }
    }

    public function update(Request $request, $id)
    {
        //Validator
        $validator = Validator::make($request->all(), [
            'title' => 'required|min:4|max:200',
            'description' => 'nullable|max:250',
            'price' => 'required|numeric',
            'type' => 'required|integer',
            'category_id' => 'required|exists:categories, id'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }
        //End Validator

        $trans = Transaction::find($id);
        $trans->title = $request->title;
        $trans->description = $request->description;
        $trans->price = $request->price;
        $trans->type = $request->type;
        $trans->category_id = $request->category_id;
        $trans->save();

        //Return
        if ($trans) {
            return response()->json([
                'data' => $request->all(),
                'success' => true
            ], 200);
        } else {
            return response()->json([
                'error' => 'Resource not found'
            ], 404);
        }
    }

    public function destroy($id)
    {
        $trans = Transaction::find($id);
        $trans->delete();

        if ($trans) {
            return response()->json([
                'success' => true,
                'deleted_at' => $trans->deleted_at,
                'id_deleted' => $id
            ], 200);
        } else {
            return response()->json([
                'error' => 'Resource not found'
            ], 404);
        }
    }
}
