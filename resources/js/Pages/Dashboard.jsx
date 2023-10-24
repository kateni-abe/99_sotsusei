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
                                {userDetails.mobile_number_public && (
                                    <div className="flex flex-col">
                                        <label className="text-[8px] font-['Inter']">
                                            携帯番号
                                        </label>
                                        <div className="text-[11px] font-['Inter'] tracking-wide">
                                            {userDetails.mobile_number}
                                        </div>
                                    </div>
                                )}
                                {userDetails.telephone_number_public && (
                                    <div className="flex flex-col">
                                        <label className="text-[8px] font-['Inter']">
                                            電話番号
                                        </label>
                                        <div className="text-[11px] font-['Inter'] tracking-wide">
                                            {userDetails.telephone_number}
                                        </div>
                                    </div>
                                )}
                                {userDetails.birthdate_public && (
                                    <div className="flex flex-col">
                                        <label className="text-[8px] font-['Inter']">
                                            生年月日
                                        </label>
                                        <div className="text-[11px] font-['Inter'] tracking-wide">
                                            {userDetails.birthdate}
                                        </div>
                                    </div>
                                )}
                                {userDetails.birthplace_public && (
                                    <div className="flex flex-col">
                                        <label className="text-[8px] font-['Inter']">
                                            出身地
                                        </label>
                                        <div className="text-[11px] font-['Inter'] tracking-wide">
                                            {userDetails.birthplace}
                                        </div>
                                    </div>
                                )}
                                {userDetails.company_public && (
                                    <div className="flex flex-col">
                                        <label className="text-[8px] font-['Inter']">
                                            会社名
                                        </label>
                                        <div className="text-[11px] font-['Inter'] tracking-wide">
                                            {userDetails.company}
                                        </div>
                                    </div>
                                )}
                                {userDetails.position_public && (
                                    <div className="flex flex-col">
                                        <label className="text-[8px] font-['Inter']">
                                            役職
                                        </label>
                                        <div className="text-[11px] font-['Inter'] tracking-wide">
                                            {userDetails.position}
                                        </div>
                                    </div>
                                )}
                                {userDetails.industry_public && (
                                    <div className="flex flex-col">
                                        <label className="text-[8px] font-['Inter']">
                                            業種
                                        </label>
                                        <div className="text-[11px] font-['Inter'] tracking-wide">
                                            {userDetails.industry}
                                        </div>
                                    </div>
                                )}
                                {userDetails.hobby_public && (
                                    <div className="flex flex-col">
                                        <label className="text-[8px] font-['Inter']">
                                            趣味
                                        </label>
                                        <div className="text-[11px] font-['Inter'] tracking-wide">
                                            {userDetails.hobby}
                                        </div>
                                    </div>
                                )}
                                {userDetails.strengths_public && (
                                    <div className="flex flex-col">
                                        <label className="text-[8px] font-['Inter']">
                                            得意なこと
                                        </label>
                                        <div className="text-[11px] font-['Inter'] tracking-wide">
                                            {userDetails.strengths}
                                        </div>
                                    </div>
                                )}
                                {userDetails.weaknesses_public && (
                                    <div className="flex flex-col">
                                        <label className="text-[8px] font-['Inter']">
                                            苦手なこと
                                        </label>
                                        <div className="text-[11px] font-['Inter'] tracking-wide">
                                            {userDetails.weaknesses}
                                        </div>
                                    </div>
                                )}
                                {userDetails.facebook_account_public && (
                                    <div className="flex flex-col">
                                        <label className="text-[8px] font-['Inter']">
                                            Facebook
                                        </label>
                                        <div className="text-[11px] font-['Inter'] tracking-wide">
                                            {userDetails.facebook_account}
                                        </div>
                                    </div>
                                )}
                                {userDetails.instagram_account_public && (
                                    <div className="flex flex-col">
                                        <label className="text-[8px] font-['Inter']">
                                            Instagram
                                        </label>
                                        <div className="text-[11px] font-['Inter'] tracking-wide">
                                            {userDetails.instagram_account}
                                        </div>
                                    </div>
                                )}
                                {userDetails.x_account_public && (
                                    <div className="flex flex-col">
                                        <label className="text-[8px] font-['Inter']">
                                            Twitter
                                        </label>
                                        <div className="text-[11px] font-['Inter'] tracking-wide">
                                            {userDetails.x_account}
                                        </div>
                                    </div>
                                )}
                                {userDetails.line_id_public && (
                                    <div className="flex flex-col">
                                        <label className="text-[8px] font-['Inter']">
                                            LINE ID
                                        </label>
                                        <div className="text-[11px] font-['Inter'] tracking-wide">
                                            {userDetails.line_id}
                                        </div>
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
