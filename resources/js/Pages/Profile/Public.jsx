import React from "react";

export default function Public({ user, userDetails }) {
    return (
        <div>
            <h1>{user.name}</h1>
            {/* 他のユーザー情報を表示 */}
        </div>
    );
}
