import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

/**
 * `Authenticated`コンポーネントは、認証されたユーザー向けのレイアウトを提供します。
 */
export default function Authenticated({ user, header, children }) {
    // ナビゲーションドロップダウンの表示状態を管理するstateです
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            {/** ナビゲーションバー */}
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        {/** ロゴとダッシュボードリンク */}
                        <div className="flex">
                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                {/** ダッシュボードへのリンク */}
                                <NavLink
                                    href={route("dashboard")}
                                    active={route().current("dashboard")}
                                >
                                    マイカード
                                </NavLink>
                                {/* <NavLink
                                    href={route("mycard")}
                                    active={route().current("mycard")}
                                >
                                    マイカード
                                </NavLink> */}
                            </div>
                        </div>

                        {/** ユーザーメニュー */}
                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                {/** ドロップダウンメニュー */}
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {/** ユーザー名 */}
                                                {user.name}

                                                {/** ドロップダウンアイコン */}
                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        {/** プロフィールとログアウトリンク */}
                                        <Dropdown.Link
                                            href={route("dashboard")}
                                        >
                                            マイカード
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("send-card")}
                                        >
                                            マイカードを渡す
                                        </Dropdown.Link>

                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            プロフィールを編集
                                        </Dropdown.Link>

                                        <Dropdown.Link
                                            href={route("public.profile", {
                                                unique_token: user.unique_token,
                                            })}
                                        >
                                            Public
                                        </Dropdown.Link>

                                        {/* <Dropdown.Link
                                            href={route("users.index")}
                                        >
                                            ユーザー一覧
                                        </Dropdown.Link> */}
                                        {/* <Dropdown.Link
                                            href={route("friends.index")}
                                        >
                                            友達一覧
                                        </Dropdown.Link> */}
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            ログアウト
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        {/** モバイル用ナビゲーションボタン */}
                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    {/** ハンバーガーアイコンとクローズアイコン */}
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/** モバイル用ナビゲーションドロップダウン */}
                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            マイカード
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route("send-card")}>
                            マイカードを渡す
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route("profile.edit")}>
                            プロフィールを編集
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("public.profile", {
                                unique_token: user.unique_token,
                            })}
                        >
                            Public
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route("users.index")}>
                            ユーザー一覧
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            method="post"
                            href={route("logout")}
                            as="button"
                        >
                            ログアウト
                        </ResponsiveNavLink>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
