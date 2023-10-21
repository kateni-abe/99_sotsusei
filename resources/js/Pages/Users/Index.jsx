// resources/js/Pages/Users/Index.jsx

import React from "react";

function Index({ users }) {
    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Index;
