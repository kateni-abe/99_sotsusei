<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class FriendsListController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();  // 認証済みのユーザーを取得
        $friends = $user->follows;  // followsメソッドはUserモデルに定義されているものと仮定

        return inertia('FriendsList', ['friends' => $friends]);
    }
}