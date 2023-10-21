// resources/js/Pages/FriendsList.jsx
import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const BlackButton = styled(Button)({
    color: "white", // ボタンの文字の色を白に
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

function FriendsList({ friends }) {
    return (
        <div>
            <h1>友達一覧</h1>
            <ul>
                {friends.map((friend) => (
                    <li key={friend.id}>{friend.name}</li>
                ))}
            </ul>
            <BlackButton href="/project/dashboard">閉じる</BlackButton>
        </div>
    );
}

export default FriendsList;
