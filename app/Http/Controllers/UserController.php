<?php

namespace App\Http\Controllers;




use Laravel\Sanctum\HasApiTokens;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function userSignIn(Request $request): JsonResponse
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user) {
            return response()->json([
                'message' => 'User not found'
            ], 404);
        }

        if ($this->isValidCredentials($request->only('email', 'password'), $user)) {
            return response()->json([
                'message' => 'Login successful',
                'user_token' => $user->createToken('testToken', ['server:admin'])->plainTextToken,
            ], 200);
        }

        return response()->json([
            'message' => 'Invalid credentials'
        ], 401);
    }

    public function isValidCredentials(array $request, User $user): bool
    {
        return $user->email === $request['email'] && Hash::check($request['password'], $user->password);
    }
}
