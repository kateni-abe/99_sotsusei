import { Link, Head } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia"; // この行を追加
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

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

function Index({ users }) {
    const handleFollow = (userId) => {
        Inertia.post(`/follow/${userId}`);
    };

    const handleUnfollow = (userId) => {
        Inertia.delete(`/unfollow/${userId}`);
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh", // 画面全体を占めるようにする
            }}
        >
            <Typography
                variant="h2"
                gutterBottom
                style={{
                    fontWeight: "bold",
                    fontFamily: "Noto Sans JP, sans-serif",
                    paddingBottom: 10,
                    fontSize: "21px",
                }}
                component="div"
            >
                ユーザー一覧
            </Typography>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                        {user.isFollowing ? (
                            <Button
                                color="default"
                                onClick={() => handleUnfollow(user.id)}
                            >
                                友達をやめる
                            </Button>
                        ) : (
                            <Button
                                color="primary"
                                onClick={() => handleFollow(user.id)}
                            >
                                友達になる
                            </Button>
                        )}
                    </li>
                ))}
            </ul>
            {/* ボタンエリア */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                <BlackButton href="/project/dashboard">閉じる</BlackButton>
            </Stack>
        </div>
    );
}

export default Index;
