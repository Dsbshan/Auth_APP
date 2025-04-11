<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class userController extends Controller
{
    public function userSignIn(Request $request): JsonResponse
    {
        $user =  User::where('email',$request->email)->first();



        if (! $user) {
            return response()->json([
                'message' => 'User not found'
            ]);
        }

        if ($this->isValidCredentials($request->all(), $user)) {
            return response()->json([
                'message' => 'User found'
            ], 200);
        }

        return response()->json([
            'message' => 'Invalid credentials or user not found'
        ], 401);






    }

    public function isValidCredentials(array $request,User $user)
    {
     return $user->email===$request['email'] && Hash::check($request['password'],$user->password);
    }

}
