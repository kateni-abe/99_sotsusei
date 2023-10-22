import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import QRCode from "qrcode.react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const BlackButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    borderRadius: 8,
    fontSize: 15,
    padding: "6px 30px",
    lineHeight: 1.5,
    backgroundColor: "black",
    fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
        backgroundColor: "#555555",
        boxShadow: "none",
    },
    "&:active": {
        boxShadow: "none",
        backgroundColor: "#333333",
        borderColor: "#005cbf",
    },
    "&:focus": {
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
});

export default function sendcard({ auth, userDetails = {} }) {
    const publicDetailsKeys = Object.keys(userDetails).filter(
        (key) => key.endsWith("_public") && userDetails[key]
    );

    const [showQR, setShowQR] = useState(false); // QRコードの表示を制御するための状態変数
    const [vcfUrl, setVcfUrl] = useState(""); // QRコードのURLを格納するための状態変数

    // 以下のコードは変更されていません
    const hasPublicDetails = publicDetailsKeys.length > 0;

    // VCFコンテンツの生成
    let vcfContent = "BEGIN:VCARD\nVERSION:3.0\n";
    if (userDetails.email_public && userDetails.email) {
        vcfContent += `EMAIL:${userDetails.email}\n`;
    }
    if (userDetails.mobile_number_public && userDetails.mobile_number) {
        vcfContent += `TEL;TYPE=CELL:${userDetails.mobile_number}\n`;
    }
    if (userDetails.telephone_number_public && userDetails.telephone_number) {
        vcfContent += `TEL;TYPE=HOME:${userDetails.telephone_number}\n`;
    }
    if (userDetails.birthdate_public && userDetails.birthdate) {
        vcfContent += `BDAY:${userDetails.birthdate}\n`;
    }
    if (userDetails.birthplace_public && userDetails.birthplace) {
        vcfContent += `ADR;TYPE=HOME:;;${userDetails.birthplace}\n`;
    }
    if (userDetails.company_public && userDetails.company) {
        vcfContent += `ORG:${userDetails.company}\n`;
    }
    if (userDetails.position_public && userDetails.position) {
        vcfContent += `TITLE:${userDetails.position}\n`;
    }
    // 注: VCFには業種のフィールドが存在しないため、カスタムフィールドとしてX-INDUSTRYを使用
    if (userDetails.industry_public && userDetails.industry) {
        vcfContent += `X-INDUSTRY:${userDetails.industry}\n`;
    }
    if (userDetails.hobby_public && userDetails.hobby) {
        vcfContent += `NOTE:趣味:${userDetails.hobby}\n`;
    }
    if (userDetails.strengths_public && userDetails.strengths) {
        vcfContent += `NOTE:得意なこと:${userDetails.strengths}\n`;
    }
    if (userDetails.weaknesses_public && userDetails.weaknesses) {
        vcfContent += `NOTE:苦手なこと:${userDetails.weaknesses}\n`;
    }
    if (userDetails.phone_number_public && userDetails.phone_number) {
        vcfContent += `TEL:${userDetails.phone_number}\n`;
    }
    // 注: SNSのアカウントはカスタムフィールドとして追加
    if (userDetails.facebook_account_public && userDetails.facebook_account) {
        vcfContent += `X-FACEBOOK:${userDetails.facebook_account}\n`;
    }
    if (userDetails.instagram_account_public && userDetails.instagram_account) {
        vcfContent += `X-INSTAGRAM:${userDetails.instagram_account}\n`;
    }
    if (userDetails.x_account_public && userDetails.x_account) {
        vcfContent += `X-ACCOUNT:${userDetails.x_account}\n`;
    }
    if (userDetails.line_id_public && userDetails.line_id) {
        vcfContent += `X-LINE-ID:${userDetails.line_id}\n`;
    }

    vcfContent += "END:VCARD\n";

    // const handleButtonClick = () => {
    //     // APIエンドポイントを呼び出し、.vcfファイルをデータベースに保存
    //     fetch(`/api/vcf/store/${auth.user.unique_token}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setShowQR(true);
    //             setVcfUrl(data.vcf_url);
    //         });
    // };

    const handleButtonClick = () => {
        // APIエンドポイントを呼び出し、.vcfファイルをデータベースに保存
        fetch(`/project/api/vcf/store`, {
            method: "POST", // メソッドをPOSTに変更
            headers: {
                "Content-Type": "application/json",
                // 他の必要なヘッダー
            },
            body: JSON.stringify({ unique_token: auth.user.unique_token }), // トークンをリクエストボディに含める
        })
            .then((response) => response.json())
            .then((data) => {
                setShowQR(true);
                setVcfUrl(data.vcf_url);
            });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    マイカード
                </h2>
            }
        >
            <Head title="マイカード" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h2>{auth.user.name}</h2>
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                {!showQR ? (
                                    <div className="p-6 text-gray-900 flex flex-col items-center">
                                        <BlackButton
                                            variant="contained"
                                            onClick={handleButtonClick}
                                        >
                                            プロフィールを渡す
                                        </BlackButton>
                                    </div>
                                ) : (
                                    <div className="p-6 text-gray-900 flex flex-col items-center">
                                        <QRCode
                                            value={vcfUrl} // 修正
                                            size={128}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
