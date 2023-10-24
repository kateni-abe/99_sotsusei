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
        vCardStr += `FN:${user.name}\n`; // 名前の中の・を変更しないように

        if (userDetails.mobile_number_public) {
            vCardStr += `TEL;TYPE=CELL:${userDetails.mobile_number}\n`;
        }

        if (userDetails.telephone_number_public) {
            vCardStr += `TEL;TYPE=WORK:${userDetails.telephone_number}\n`;
        }

        if (userDetails.email_public) {
            vCardStr += `EMAIL:${userDetails.email}\n`;
        }

        // 一般的な情報以外をNOTEタグに追加
        let notes = [];
        if (userDetails.hobby_public) notes.push("趣味: " + userDetails.hobby);
        if (userDetails.strengths_public)
            notes.push("得意なこと: " + userDetails.strengths);
        if (userDetails.weaknesses_public)
            notes.push("苦手なこと: " + userDetails.weaknesses);
        if (notes.length > 0) {
            vCardStr += `NOTE:${notes.join("\\n")}\n`; // \nで改行
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
                            {userDetails.mobile_number_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Inter']">
                                        携帯番号
                                    </label>

                                    <div>
                                        {" "}
                                        <a
                                            href={`tel:${userDetails.mobile_number}`}
                                        >
                                            {userDetails.mobile_number}
                                        </a>
                                    </div>
                                </div>
                            )}
                            {userDetails.telephone_number_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Inter']">
                                        電話番号
                                    </label>

                                    <div>
                                        <a
                                            href={`tel:${userDetails.telephone_number}`}
                                        >
                                            {userDetails.telephone_number}
                                        </a>
                                    </div>
                                </div>
                            )}

                            {userDetails.birthdate_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Inter']">
                                        生年月日
                                    </label>
                                    <div> {userDetails.birthdate}</div>
                                </div>
                            )}
                            {userDetails.birthplace_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Inter']">
                                        出身地
                                    </label>
                                    <div> {userDetails.birthplace}</div>
                                </div>
                            )}
                            {userDetails.company_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Inter']">
                                        会社名
                                    </label>
                                    <div>{userDetails.company}</div>{" "}
                                </div>
                            )}
                            {userDetails.position_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Inter']">
                                        役職
                                    </label>
                                    <div>{userDetails.position}</div>
                                </div>
                            )}
                            {userDetails.industry_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Inter']">
                                        業種
                                    </label>
                                    <div>{userDetails.industry}</div>
                                </div>
                            )}
                            {userDetails.hobby_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Inter']">
                                        趣味
                                    </label>
                                    <div>{userDetails.hobby}</div>
                                </div>
                            )}
                            {userDetails.strengths_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Inter']">
                                        得意なこと
                                    </label>
                                    <div>{userDetails.strengths}</div>
                                </div>
                            )}
                            {userDetails.weaknesses_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Inter']">
                                        苦手なこと
                                    </label>

                                    <div>{userDetails.weaknesses}</div>
                                </div>
                            )}
                            {userDetails.facebook_account_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Inter']">
                                        Facebook
                                    </label>
                                    <div>{userDetails.facebook_account}</div>
                                </div>
                            )}
                            {userDetails.instagram_account_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Inter']">
                                        Instagram:{" "}
                                    </label>
                                    <div>{userDetails.instagram_account}</div>
                                </div>
                            )}
                            {userDetails.x_account_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Inter']">
                                        Twitter:
                                    </label>
                                    <div>{userDetails.x_account}</div>
                                </div>
                            )}
                            {userDetails.line_id_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Inter']">
                                        LINE ID:
                                    </label>
                                    <div>{userDetails.line_id}</div>
                                </div>
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
