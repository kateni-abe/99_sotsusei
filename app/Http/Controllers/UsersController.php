<?php

// app/Http/Controllers/UsersController.php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index()
    {
        $currentUser = auth()->user();
        $users = User::orderBy('name', 'asc')->get()->map(function ($user) use ($currentUser) {
            $user->isFollowing = $currentUser->isFollowing($user);
            return $user;
        });
        return Inertia::render('Users/Index', ['users' => $users]);
    }

    
}