<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\product;
use Illuminate\Support\Facades\Hash;
class ProductController extends Controller
{
    //
function addProduct (Request $req)
    {
        $product= new product;
        $product->name=$req->input('name');
        $product->price=$req->input('price');
        $product->description=$req->input('description');
        $product->file_path=$req->file('file')->store('productimage');
        $product->save();
        return $product;

        // return $req->file('file')->store(products');to store images 
    }
}
