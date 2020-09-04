<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }
    public function index()
    {
        $category = Category::all();
        if ($category) {
            return response()->json([
                'data' => $category,
                'length' => count($category)
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
            'name' => 'required|max:200|min:4'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }
        $categ = new Category();
        $categ->name = $request->name;
        $categ->save();
        //Return
        if ($categ) {
            return response()->json([
                'data' => $request->all(),
                'success' => true,
                'last_insert_id' => $categ->id
            ], 201);
        } else {
            return response()->json([
                'error' => 'Resource not found'
            ], 404);
        }
    }


    public function show($id)
    {
        $categ = Category::find($id);
        if ($categ) {
            return response()->json([
                'data' => $categ,
                'success' => true
            ], 200);
        } else {
            return response()->json([
                'error' => 'Resource not found'
            ], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:200|min:4'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }

        $categ = Category::find($id);
        $categ->name = $request->name;
        $categ->save();

        //Return
        if ($categ) {
            return response()->json([
                'data' => $categ,
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
        // delete
        $categ = Category::find($id);
        $categ->delete();

        if ($categ) {
            return response()->json([
                'success' => true,
                'deleted_at' => $categ->deleted_at,
                'id_deleted' => $id
            ], 200);
        } else {
            return response()->json([
                'error' => 'Resource not found'
            ], 404);
        }
    }
}
