import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import QRCode from "qrcode.react";

export default function dashboard({ auth, userDetails = {}, user }) {
    const publicDetailsKeys = Object.keys(userDetails).filter(
        (key) => key.endsWith("_public") && userDetails[key]
    );

    const hasPublicDetails = publicDetailsKeys.length > 0;

    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={
            //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            //         マイカード
            //     </h2>
            // }
        >
            <Head title="マイカード" />

            <div className="py-12 flex justify-center">
                <div className="w-[360px] bg-white overflow-hidden shadow-sm sm:rounded-lg flex flex-col items-center p-8">
                    <h2 className="text-2xl mb-4 font-['Inter']">
                        {auth.user.name}
                    </h2>

                    <div className="w-[300px] border border-zinc-500 rounded-[5px] p-4 flex flex-col space-y-4">
                        {hasPublicDetails ? (
                            <>
                                {userDetails.mobile_number_public == true && (
                                    <div>
                                        <label className="text-[10px] font-['Inter']">
                                            携帯番号
                                        </label>

                                        <div> {userDetails.mobile_number}</div>
                                    </div>
                                )}
                                {userDetails.telephone_number_public ==
                                    true && (
                                    <div>
                                        <label className="text-[10px] font-['Inter']">
                                            電話番号
                                        </label>

                                        <div>
                                            {userDetails.telephone_number}
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
                                {userDetails.facebook_account_public ==
                                    true && (
                                    <div>
                                        <label className="text-[10px] font-['Inter']">
                                            Facebook
                                        </label>
                                        <div>
                                            {userDetails.facebook_account}
                                        </div>
                                    </div>
                                )}
                                {userDetails.instagram_account_public ==
                                    true && (
                                    <div>
                                        <label className="text-[10px] font-['Inter']">
                                            Instagram:{" "}
                                        </label>
                                        <div>
                                            {userDetails.instagram_account}
                                        </div>
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
                            <p className="mt-4">
                                プロフィールを編集して、カードの表示内容を設定してください
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
