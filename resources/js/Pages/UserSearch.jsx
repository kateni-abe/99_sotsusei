import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function UserSearch({ users = [] }) {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        Inertia.post("/user-search", { query });
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ユーザー名を入力してください"
            />
            <button onClick={handleSearch}>🔍</button>
            <div>
                {users.length > 0 ? (
                    users.map((user) => <div key={user.id}>{user.name}</div>)
                ) : (
                    <div>ユーザーが見つかりません</div>
                )}
            </div>
            <button onClick={() => Inertia.visit("/some-previous-page")}>
                閉じる
            </button>
        </div>
    );
}
