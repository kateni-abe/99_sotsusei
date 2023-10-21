// ファイル: resources/js/Pages/Sendcard.jsx

import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import QRCode from "qrcode.react";

//mui ボタンの設定
const BlackButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    borderRadius: 8,
    fontSize: 15,
    padding: "6px 30px",
    lineHeight: 1.5,
    backgroundColor: "black",
    color: "white",
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
export default function Sendcard({ userURL }) {
    const copyToClipboard = (url) => {
        navigator.clipboard
            .writeText(url)
            .then(() => {
                alert("マイカードリンクがクリップボードにコピーされました!");
            })
            .catch((err) => {
                console.error("Failed to copy text: ", err);
                alert("エラーが発生しました。もう一度お試しください。");
            });
    };

    return (
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            {/* QRコードエリア */}
            <div className="p-6 text-gray-900 flex flex-col items-center">
                <QRCode value={userURL} size={128} />
                {/* コピーボタン */}
                <div className="mt-4 text-center">
                    <BlackButton
                        variant="contained"
                        onClick={() => copyToClipboard(userURL)}
                    >
                        マイカードリンクをコピー
                    </BlackButton>
                </div>
            </div>
        </div>
    );
}
