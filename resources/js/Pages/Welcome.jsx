export default function Welcome({ auth }) {
    return (
        <>
            {/* ヘッド要素の設定 */}
            <Head title="Welcome" />

            {/* メインコンテナ */}
            <div className="relative flex flex-col items-center justify-center min-h-screen bg-dots-darker bg-center bg-your-color-class dark:bg-your-dark-color-class dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                {/* タイトルエリア */}
                <Typography
                    variant="h2"
                    gutterBottom
                    style={{
                        fontWeight: "bold",
                        fontFamily: "Noto Sans JP, sans-serif",
                        paddingBottom: 10,
                        fontSize: "28px",
                    }}
                    component="div"
                >
                    ヒトトナリ
                </Typography>

                {/* ボタンエリア */}
                <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                    <BlackButton variant="contained" href={route("login")}>
                        ログイン
                    </BlackButton>
                    <BlackButton variant="contained" href={route("register")}>
                        新規登録
                    </BlackButton>
                </Stack>
            </div>
        </>
    );
}
