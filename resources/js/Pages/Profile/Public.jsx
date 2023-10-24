import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Helmet } from "react-helmet";

const BlackButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    borderRadius: 8,
    fontSize: 15,
    padding: "6px 30px",
    lineHeight: 1.5,
    backgroundColor: "black",
    fontFamily: "'Noto Sans JP', sans-serif",
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

        if (userDetails.facebook_account_public) {
            vCardStr += `URL:https://www.facebook.com/${userDetails.facebook_account}\n`;
        }
        if (userDetails.instagram_account_public) {
            vCardStr += `URL:https://www.instagram.com/${userDetails.instagram_account}\n`;
        }
        if (userDetails.x_account_public) {
            vCardStr += `URL:https://twitter.com/${userDetails.x_account}\n`;
        }

        let notes = [];
        if (userDetails.hobby_public) notes.push("趣味: " + userDetails.hobby);
        if (userDetails.strengths_public)
            notes.push("得意なこと: " + userDetails.strengths);
        if (userDetails.weaknesses_public)
            notes.push("苦手なこと: " + userDetails.weaknesses);
        if (notes.length > 0) {
            vCardStr += `NOTE:${notes.join("\\n")}\n`;
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
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+JP:wght@100;200;300;400;500;600;700&family=Noto+Sans+JP:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <style type="text/css">{`
                    body {
                        font-family: 'Noto Sans JP', sans-serif;
                    }
                    .text-color-action {
                        color: rgb(0, 64, 141);
                    }
                `}</style>
            </Helmet>
            <div className="max-w-md w-full space-y-8">
                <h1 className="text-center text-2xl font-bold">{user.name}</h1>
                <div className="space-y-4">
                    {hasPublicDetails ? (
                        <>
                            {userDetails.mobile_number_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Noto Sans JP']">
                                        携帯番号
                                    </label>

                                    <div>
                                        {" "}
                                        <a
                                            href={`tel:${userDetails.mobile_number}`}
                                            style={{ color: "rgb(0, 64, 141)" }}
                                        >
                                            {userDetails.mobile_number}
                                        </a>
                                    </div>
                                </div>
                            )}
                            {userDetails.telephone_number_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Noto Sans JP']">
                                        電話番号
                                    </label>

                                    <div>
                                        <a
                                            href={`tel:${userDetails.telephone_number}`}
                                            style={{ color: "rgb(0, 64, 141)" }}
                                        >
                                            {userDetails.telephone_number}
                                        </a>
                                    </div>
                                </div>
                            )}

                            {userDetails.birthdate_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Noto Sans JP']">
                                        生年月日
                                    </label>
                                    <div> {userDetails.birthdate}</div>
                                </div>
                            )}
                            {userDetails.birthplace_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Noto Sans JP']">
                                        出身地
                                    </label>
                                    <div> {userDetails.birthplace}</div>
                                </div>
                            )}
                            {userDetails.company_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Noto Sans JP']">
                                        会社名
                                    </label>
                                    <div>{userDetails.company}</div>{" "}
                                </div>
                            )}
                            {userDetails.position_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Noto Sans JP']">
                                        役職
                                    </label>
                                    <div>{userDetails.position}</div>
                                </div>
                            )}
                            {userDetails.industry_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Noto Sans JP']">
                                        業種
                                    </label>
                                    <div>{userDetails.industry}</div>
                                </div>
                            )}
                            {userDetails.hobby_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Noto Sans JP']">
                                        趣味
                                    </label>
                                    <div>{userDetails.hobby}</div>
                                </div>
                            )}
                            {userDetails.strengths_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Noto Sans JP']">
                                        得意なこと
                                    </label>
                                    <div>{userDetails.strengths}</div>
                                </div>
                            )}
                            {userDetails.weaknesses_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Noto Sans JP']">
                                        苦手なこと
                                    </label>

                                    <div>{userDetails.weaknesses}</div>
                                </div>
                            )}
                            {userDetails.facebook_account_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Noto Sans JP']">
                                        Facebook
                                    </label>
                                    <div>
                                        <a
                                            href={`https://www.facebook.com/${userDetails.facebook_account}`}
                                            style={{ color: "rgb(0, 64, 141)" }}
                                            target="_blank"
                                        >
                                            {userDetails.facebook_account}
                                        </a>
                                    </div>
                                </div>
                            )}
                            {userDetails.instagram_account_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Noto Sans JP']">
                                        Instagram:{" "}
                                    </label>
                                    <div>
                                        <a
                                            href={`https://www.instagram.com/${userDetails.instagram_account}`}
                                            style={{ color: "rgb(0, 64, 141)" }}
                                            target="_blank"
                                        >
                                            {userDetails.instagram_account}
                                        </a>
                                    </div>
                                </div>
                            )}
                            {userDetails.x_account_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Noto Sans JP']">
                                        Twitter:
                                    </label>
                                    <div>
                                        <a
                                            href={`https://twitter.com/${userDetails.x_account}`}
                                            style={{ color: "rgb(0, 64, 141)" }}
                                            target="_blank"
                                        >
                                            {userDetails.x_account}
                                        </a>
                                    </div>
                                </div>
                            )}

                            {userDetails.line_id_public == true && (
                                <div>
                                    <label className="text-[10px] font-['Noto Sans JP']">
                                        LINE ID:
                                    </label>
                                    <div>{userDetails.line_id}</div>
                                </div>
                            )}
                        </>
                    ) : (
                        <p className="text-center font-['Noto Sans JP']">
                            このユーザーは公開情報を設定していません。
                        </p>
                    )}
                </div>
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
