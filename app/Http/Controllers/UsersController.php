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
        $users = User::orderBy('name', 'asc')->get();
        return Inertia::render('Users/Index', ['users' => $users]);
    }
}