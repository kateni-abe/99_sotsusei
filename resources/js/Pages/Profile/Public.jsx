import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

//mui ボタンの設定
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

export default function Public({ user, userDetails = {} }) {
    const publicDetailsKeys = Object.keys(userDetails).filter(
        (key) => key.endsWith("_public") && userDetails[key]
    );

    const hasPublicDetails = publicDetailsKeys.length > 0;

    const createVCard = () => {
        let vCardStr = "BEGIN:VCARD\nVERSION:3.0\n";
        vCardStr += `FN:${user.name}\n`;

        if (userDetails.mobile_number_public) {
            vCardStr += `TEL;TYPE=CELL:${userDetails.mobile_number}\n`;
        }

        if (userDetails.telephone_number_public) {
            vCardStr += `TEL;TYPE=WORK:${userDetails.telephone_number}\n`;
        }

        if (userDetails.email_public) {
            vCardStr += `EMAIL:${userDetails.email}\n`;
        }

        vCardStr += "END:VCARD";
        return vCardStr;
    };

    const handleVCardDownload = () => {
        const vCardStr = createVCard();
        const blob = new Blob([vCardStr], { type: "text/vcard" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = "userDetails.vcf";
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="bg-custom-gray min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h1 className="text-center text-2xl font-bold">{user.name}</h1>
                <div className="space-y-4">
                    {hasPublicDetails ? (
                        <>
                            {userDetails.mobile_number_public && (
                                <div>
                                    携帯番号:{" "}
                                    <a
                                        href={`tel:${userDetails.mobile_number}`}
                                    >
                                        {userDetails.mobile_number}
                                    </a>
                                </div>
                            )}
                            {userDetails.telephone_number_public && (
                                <div>
                                    電話番号:{" "}
                                    <a
                                        href={`tel:${userDetails.telephone_number}`}
                                    >
                                        {userDetails.telephone_number}
                                    </a>
                                </div>
                            )}
                            {userDetails.birthdate_public && (
                                <div>生年月日: {userDetails.birthdate}</div>
                            )}
                            {userDetails.birthplace_public && (
                                <div>出身地: {userDetails.birthplace}</div>
                            )}
                            {userDetails.company_public && (
                                <div>会社名: {userDetails.company}</div>
                            )}
                            {userDetails.position_public && (
                                <div>役職: {userDetails.position}</div>
                            )}
                            {userDetails.industry_public && (
                                <div>業種: {userDetails.industry}</div>
                            )}
                            {userDetails.hobby_public && (
                                <div>趣味: {userDetails.hobby}</div>
                            )}
                            {userDetails.strengths_public && (
                                <div>得意なこと: {userDetails.strengths}</div>
                            )}
                            {userDetails.weaknesses_public && (
                                <div>苦手なこと: {userDetails.weaknesses}</div>
                            )}
                            {userDetails.facebook_account_public && (
                                <div>
                                    Facebook: {userDetails.facebook_account}
                                </div>
                            )}
                            {userDetails.instagram_account_public && (
                                <div>
                                    Instagram: {userDetails.instagram_account}
                                </div>
                            )}
                            {userDetails.x_account_public && (
                                <div>Twitter: {userDetails.x_account}</div>
                            )}
                            {userDetails.line_id_public && (
                                <div>LINE ID: {userDetails.line_id}</div>
                            )}
                        </>
                    ) : (
                        <p className="text-center">
                            このユーザーは公開情報を設定していません。
                        </p>
                    )}
                </div>
                {/* vCardダウンロードボタンを更新 */}
                <div className="mt-4 flex justify-center">
                    <BlackButton
                        variant="contained"
                        onClick={handleVCardDownload}
                    >
                        連絡先に登録
                    </BlackButton>
                </div>
            </div>
        </div>
    );
}
