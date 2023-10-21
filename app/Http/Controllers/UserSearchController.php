<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserSearchController extends Controller
{
    public function index()
    {
        return Inertia::render('UserSearch');
    }

    public function search(Request $request)
    {
        $query = $request->input('query');
        $users = User::where('name', 'LIKE', "%{$query}%")->get();

        return Inertia::render('UserSearch', [
            'users' => $users,
        ]);
    }
}