<?php

// app/Http/Controllers/FollowController.php

namespace App\Http\Controllers;

use App\Models\Follow;
use App\Models\User;
use Illuminate\Http\Request;

class FollowController extends Controller
{
    public function follow(User $user)
    {
        $follower = auth()->user();
        $follower->followees()->syncWithoutDetaching([$user->id]);

        return redirect()->back();
    }

    public function unfollow(User $user)
    {
        $follower = auth()->user();
        $follower->followees()->detach($user->id);

        return redirect()->back();
    }
}