<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class userController extends Controller
{
    public function userSignIn()
    {
      return ['hello'=>'mcn'];
    }
}
