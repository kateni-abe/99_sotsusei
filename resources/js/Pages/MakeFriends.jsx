import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const BlackButton = styled(Button)({
    color: "white", // ボタンの文字の色を白にする
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

function MakeFriends({ user, auth }) {
    const [isFollowing, setIsFollowing] = useState(
        user.is_followed_by_current_user
    );

    const handleFollow = () => {
        Inertia.post(`/follow/${user.id}`);
        setIsFollowing(true);
    };

    const handleUnfollow = () => {
        Inertia.delete(`/unfollow/${user.id}`);
        setIsFollowing(false);
    };

    const publicDetailsKeys = Object.keys(userDetails).filter(
        (key) => key.endsWith("_public") && userDetails[key]
    );

    return (
        <div>
            {/* Display User's Public Details */}
            {publicDetailsKeys.map((key) => {
                const detailKey = key.replace("_public", "");
                return (
                    <div key={key}>
                        {detailKey}: {userDetails[detailKey]}
                    </div>
                );
            })}

            {/* ボタンのエリアをflexboxで囲む */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                }}
            >
                {auth.user ? (
                    isFollowing ? (
                        <BlackButton onClick={handleUnfollow}>
                            友達をやめる
                        </BlackButton>
                    ) : (
                        <BlackButton onClick={handleFollow}>
                            友達になる
                        </BlackButton>
                    )
                ) : (
                    <BlackButton onClick={() => Inertia.visit("/login")}>
                        ログインしてフォロー
                    </BlackButton>
                )}
                <BlackButton href="/project/dashboard">閉じる</BlackButton>
            </div>
        </div>
    );
}

export default MakeFriends;
