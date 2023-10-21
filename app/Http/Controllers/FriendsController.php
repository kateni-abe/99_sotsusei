<?php

// app/Http/Controllers/FriendsController.php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FriendsController extends Controller
{
    public function index()
    {
        $friends = Auth::user()->friends;
        return Inertia::render('Users/FriendsIndex', ['friends' => $friends]);
    }
}