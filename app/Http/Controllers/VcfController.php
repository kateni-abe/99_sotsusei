<?php
// app/Http/Controllers/VcfController.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\storage;

class VcfController extends Controller
{
    public function generateVcf(Request $request)
    {
        // 認証済みのユーザー情報を取得
        $user = $request->user();
        
        // VCFファイル内容の構築
        $vcfContent = "BEGIN:VCARD\nVERSION:3.0\n";
        $vcfContent .= "FN:{$user->name}\n";  // 氏名
        $vcfContent .= "EMAIL:{$user->email}\n";  // メールアドレス
        $vcfContent .= "END:VCARD\n";
        
        // .vcfファイルをディスクに保存
        $filename = $user->id . '.vcf';
        Storage::disk('public')->put($filename, $vcfContent);
        
        // .vcfファイルのURLを取得
        $vcfUrl = Storage::url($filename);
        
        return response()->json(['vcf_url' => $vcfUrl]);
    }
}