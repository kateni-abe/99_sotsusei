<?php

// app/Http/Controllers/MakeFriendsController.php
namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class MakeFriendsController extends Controller
{
    public function show($token)
{
    $user = User::where('unique_token', $token)->with('userDetails')->firstOrFail();

    return Inertia::render('MakeFriends', [
        'user' => $user,  // userDetailsはuserオブジェクト内に含まれています
    ]);
}

}