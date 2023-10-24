import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import CancelButton from "@/Components/CancelButton";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <div className="bg-custom-gray min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <Head title="Register" />

                <div className="max-w-md w-full space-y-8">
                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <InputLabel htmlFor="name" value="氏名" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-2 block w-full p-2 border border-gray-300 rounded-md focus:border-black focus:ring-1 focus:ring-black"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2 text-red-600"
                            />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="email"
                                value="Eメールアドレス"
                            />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:border-black focus:ring-1 focus:ring-black"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
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
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2 text-red-600"
                            />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="パスワード（再入力）"
                            />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:border-black focus:ring-1 focus:ring-black"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                required
                            />
                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2 text-red-600"
                            />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <Link
                                href={route("login")}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                アカウントをお持ちの方はこちら
                            </Link>

                            <div className="flex space-x-4">
                                <PrimaryButton
                                    className="ml-4"
                                    disabled={processing}
                                >
                                    登録
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
