<?php

use App\Http\Controllers\userController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/sign-in',[userController::class,'userSignIn']
);


