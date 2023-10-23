<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JeroenDesloovere\VCard\VCard;
use JeroenDesloovere\VCard\Property\Name;
use JeroenDesloovere\VCard\Property\Email;

class VCardController extends Controller
{
    public function generate(Request $request)
    {
        $vcard = new VCard();
        
        // Here, add your user details to the vCard
        // For example:
        $name = new Name('Lastname', 'Firstname');
        $email = new Email('email@example.com');
        
        $vcard->add($name);
        $vcard->add($email);
        
        // Save vCard to a public directory and get the URL
        $filePath = public_path('vcards/user.vcf');
        file_put_contents($filePath, $vcard->getOutput());
        $url = asset('vcards/user.vcf');
        
        return response()->json(['vcf_url' => $url]);
    }
}