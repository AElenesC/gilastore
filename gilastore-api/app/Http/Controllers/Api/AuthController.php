<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'Name'     => 'required|string|max:150',
            'username' => 'required|string|max:50|unique:users,username',
            'Email'    => 'required|string|email|max:150|unique:users,Email',
            'password' => 'required|string|min:6',
            'Role'     => 'required|string|max:50',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'validationError',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = User::create([
            'Name'       => $request->Name,
            'username'   => $request->username,
            'Email'      => $request->Email,
            'password'   => Hash::make($request->password),
            'Role'       => $request->Role,
            'Avatar_Url' => $request->input('Avatar_Url', null),
            'CreatedBy'  => $request->input('CreatedBy', null),
        ]);

        $token = JWTAuth::fromUser($user);

        return response()->json([
            'status'        => 'success',
            'message'       => 'User registered successfully.',
            'user'          => $user,
            'authorization' => [
                'token' => $token,
                'type'  => 'bearer',
            ]
        ], 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('Email', 'password');

        if (!$token = auth()->guard('api')->attempt($credentials)) {
            return response()->json([
                'status'  => 'error',
                'message' => 'Unauthorized. Invalid email or password.'
            ], 401);
        }

        $user = auth()->guard('api')->user();

        return response()->json([
            'status'        => 'success',
            'message'       => 'Login successful.',
            'user'          => $user,
            'authorization' => [
                'token' => $token,
                'type'  => 'bearer',
            ]
        ], 200);
    }

    public function me()
    {
        return response()->json([
            'status' => 'success',
            'user'   => auth()->guard('api')->user()
        ], 200);
    }

    public function index(Request $request){
        $users = User::all();

        return response()->json($users, 200);
    }

    public function logout()
    {
        auth()->guard('api')->logout();

        return response()->json([
            'status'  => 'success',
            'message' => 'Successfully logged out.'
        ], 200);
    }
}