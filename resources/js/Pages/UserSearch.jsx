import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

// MUI styled button for the close button
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

export default function UserSearch({ users = [] }) {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        Inertia.post("/user-search", { query });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col items-center w-full max-w-md p-4 bg-white rounded shadow-md">
                <div className="flex items-center w-full mb-4">
                    <input
                        className="flex-grow p-2 border rounded"
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="ユーザー名を入力してください"
                    />
                    <button className="ml-2" onClick={handleSearch}>
                        🔍
                    </button>
                </div>
                <div className="w-full mb-4">
                    {users.length > 0 ? (
                        users.map((user) => (
                            <div key={user.id} className="mb-2">
                                {user.name}
                            </div>
                        ))
                    ) : (
                        <div>ユーザーが見つかりません</div>
                    )}
                </div>
                <div className="w-full">
                    <BlackButton
                        onClick={() => Inertia.visit("/project/dashboard")}
                    >
                        閉じる
                    </BlackButton>
                </div>
            </div>
        </div>
    );
}
