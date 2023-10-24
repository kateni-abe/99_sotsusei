import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import CancelButton from "@/Components/CancelButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        if (!data.email && !data.password) {
            alert("メールアドレスとパスワードを入力してください");
            return;
        }

        if (!data.email || !data.password) {
            alert("メールアドレスとパスワードの両方を入力してください");
            return;
        }

        post(route("login"), {
            onSuccess: (response) => {
                // 成功した場合の処理（何もしないか、特定の処理を追加）
            },
            onError: (errors) => {
                if (errors.email || errors.password) {
                    alert("メールアドレスまたはパスワードが正しくありません");
                }
            },
        });
    };

    return (
        <GuestLayout>
            <div className="bg-custom-gray min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <Head title="Log in" />
                <div className="max-w-md w-full space-y-8">
                    {status && (
                        <div className="mb-4 font-medium text-sm text-green-600">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="mt-8 space-y-6">
                        <div>
                            <InputLabel htmlFor="email" value="Eメール" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:border-black focus:ring-1 focus:ring-black"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2 text-red-600"
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="パスワード" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:border-black focus:ring-1 focus:ring-black"
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2 text-red-600"
                            />
                        </div>

                        <div className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />
                            <span className="ml-2 text-sm text-gray-600">
                                ログイン状態を保持
                            </span>
                        </div>

                        <div className="flex items-center justify-between mt-6">
                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    パスワードを忘れた
                                </Link>
                            )}

                            <div className="flex space-x-4">
                                <PrimaryButton
                                    className="ml-4"
                                    disabled={processing}
                                >
                                    ログイン
                                </PrimaryButton>
                                <CancelButton
                                    className="ml-4"
                                    disabled={processing}
                                >
                                    <a href="/project">キャンセル</a>
                                </CancelButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
