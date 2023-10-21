<?php

// ファイル: app/Http/Controllers/SendcardController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SendcardController extends Controller
{
    public function show(Request $request)
    {
        $userURL = $request->user()->getQrCodeUrl();  // このメソッドは実装する必要があります
        return Inertia::render('Sendcard', [
            'userURL' => $userURL,
        ]);
    }
}