// import React from "react";

// export default function Public({ user, userDetails }) {
//     return (
//         <div>
//             <h1>{user.name}</h1>
//             {/* 他のユーザー情報を表示 */}
//         </div>
//     );
// }

// ファイル: resources/js/Pages/Dashboard.jsx

// AuthenticatedLayoutコンポーネントをインポート
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// Inertia.jsのHeadコンポーネントをインポート
import { Head } from "@inertiajs/react";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

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

// Dashboardコンポーネントを定義。authオブジェクトとuserDetailsオブジェクトをプロップとして受け取りますよ。
export default function dashboard({ auth, userDetails = {} }) {
    // console.log(userDetails);

    const publicDetailsKeys = Object.keys(userDetails).filter(
        (key) => key.endsWith("_public") && userDetails[key]
    );

    const hasPublicDetails = publicDetailsKeys.length > 0;

    return (
        // AuthenticatedLayoutコンポーネントを使用して、
        // auth.userオブジェクトとヘッダー要素を渡します。
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    プロフィールカード
                </h2>
            }
        >
            {/* Headコンポーネントを使用してページタイトルを設定します。 */}
            <Head title="マイカード" />

            {/* 主要コンテンツエリア */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {/* ユーザーがログインしていることを通知するメッセージ */}
                        <div className="p-6 text-gray-900">
                            <h2>{auth.user.name}</h2>{" "}
                            {/* ユーザーの氏名を表示 */}
                            {hasPublicDetails ? (
                                <>
                                    {userDetails.mobile_number_public ==
                                        true && (
                                        <div>
                                            携帯番号:
                                            {userDetails.mobile_number}
                                        </div>
                                    )}
                                    {userDetails.telephone_number_public ==
                                        true && (
                                        <div>
                                            電話番号:
                                            {userDetails.telephone_number}
                                        </div>
                                    )}

                                    {userDetails.birthdate_public == true && (
                                        <div>
                                            生年月日: {userDetails.birthdate}
                                        </div>
                                    )}
                                    {userDetails.birthplace_public == true && (
                                        <div>
                                            出身地: {userDetails.birthplace}
                                        </div>
                                    )}
                                    {userDetails.company_public == true && (
                                        <div>会社名: {userDetails.company}</div>
                                    )}
                                    {userDetails.position_public == true && (
                                        <div>役職: {userDetails.position}</div>
                                    )}
                                    {userDetails.industry_public == true && (
                                        <div>業種: {userDetails.industry}</div>
                                    )}
                                    {userDetails.hobby_public == true && (
                                        <div>趣味: {userDetails.hobby}</div>
                                    )}
                                    {userDetails.strengths_public == true && (
                                        <div>
                                            得意なこと: {userDetails.strengths}
                                        </div>
                                    )}
                                    {userDetails.weaknesses_public == true && (
                                        <div>
                                            苦手なこと: {userDetails.weaknesses}
                                        </div>
                                    )}
                                    {userDetails.phone_number_public ==
                                        true && (
                                        <div>
                                            電話番号: {userDetails.phone_number}
                                        </div>
                                    )}
                                    {userDetails.facebook_account_public ==
                                        true && (
                                        <div>
                                            Facebook:{" "}
                                            {userDetails.facebook_account}
                                        </div>
                                    )}
                                    {userDetails.instagram_account_public ==
                                        true && (
                                        <div>
                                            Instagram:{" "}
                                            {userDetails.instagram_account}
                                        </div>
                                    )}
                                    {userDetails.x_account_public == true && (
                                        <div>
                                            Twitter: {userDetails.x_account}
                                        </div>
                                    )}
                                    {userDetails.line_id_public == true && (
                                        <div>
                                            LINE ID: {userDetails.line_id}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <p>
                                    プロフィールを編集して、カードの表示内容を設定してください
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
