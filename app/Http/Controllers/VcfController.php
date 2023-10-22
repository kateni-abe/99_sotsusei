<?php

// app/Http/Controllers/VcfController.php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class VcfController extends Controller
{
    public function generateVcf($unique_token)
    {
        $user = User::where('unique_token', $unique_token)->firstOrFail();
        $userDetails = $user->userDetails;

        // VCFファイル内容の構築
        $vcfContent = "BEGIN:VCARD\n";
        $vcfContent .= "VERSION:3.0\n";
        $vcfContent .= "FN:{$user->name}\n";
        
        if ($userDetails) {
            if ($userDetails->email_public && $userDetails->email) {
                $vcfContent .= "EMAIL:{$userDetails->email}\n";
            }
            if ($userDetails->mobile_number_public && $userDetails->mobile_number) {
                $vcfContent .= "TEL;TYPE=CELL:{$userDetails->mobile_number}\n";
            }
            if ($userDetails->telephone_number_public && $userDetails->telephone_number) {
                $vcfContent .= "TEL;TYPE=HOME:{$userDetails->telephone_number}\n";
            }
            if ($userDetails->birthdate_public && $userDetails->birthdate) {
                $vcfContent .= "BDAY:{$userDetails->birthdate}\n";
            }
            if ($userDetails->birthplace_public && $userDetails->birthplace) {
                $vcfContent .= "ADR;TYPE=HOME:;;{$userDetails->birthplace}\n";
            }
            if ($userDetails->company_public && $userDetails->company) {
                $vcfContent .= "ORG:{$userDetails->company}\n";
            }
            if ($userDetails->position_public && $userDetails->position) {
                $vcfContent .= "TITLE:{$userDetails->position}\n";
            }
            if ($userDetails->industry_public && $userDetails->industry) {
                $vcfContent .= "NOTE:業種: {$userDetails->industry}\n";
            }
            if ($userDetails->hobby_public && $userDetails->hobby) {
                $vcfContent .= "NOTE:趣味: {$userDetails->hobby}\n";
            }
            if ($userDetails->strengths_public && $userDetails->strengths) {
                $vcfContent .= "NOTE:得意なこと: {$userDetails->strengths}\n";
            }
            if ($userDetails->weaknesses_public && $userDetails->weaknesses) {
                $vcfContent .= "NOTE:苦手なこと: {$userDetails->weaknesses}\n";
            }
            if ($userDetails->phone_number_public && $userDetails->phone_number) {
                $vcfContent .= "TEL:{$userDetails->phone_number}\n";
            }
            if ($userDetails->facebook_account_public && $userDetails->facebook_account) {
                $vcfContent .= "URL:{$userDetails->facebook_account}\n";
            }
            if ($userDetails->instagram_account_public && $userDetails->instagram_account) {
                $vcfContent .= "URL:{$userDetails->instagram_account}\n";
            }
            if ($userDetails->x_account_public && $userDetails->x_account) {
                $vcfContent .= "URL:{$userDetails->x_account}\n";
            }
            if ($userDetails->line_id_public && $userDetails->line_id) {
                $vcfContent .= "NOTE:LINE ID: {$userDetails->line_id}\n";
            }
        }
        
        $vcfContent .= "END:VCARD\n";

        return response($vcfContent)
            ->header('Content-Type', 'text/vcard')
            ->header('Content-Disposition', 'attachment; filename="' . $user->name . '.vcf"');
    }
}