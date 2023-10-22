<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SendCardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $vcfUrl = $user->userDetails->vcf_url;

        return Inertia::render('SendCard', [
            'vcfUrl' => $vcfUrl,
        ]);
    }
}