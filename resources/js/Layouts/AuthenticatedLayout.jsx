import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const publicProfileLink = route("public.profile", {
        unique_token: user.unique_token,
    });
    const qrCodeLink = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${publicProfileLink}`;

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            {/* Left Navigation Elements */}
                        </div>
                        <div className="flex items-center">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}
                                                {/* ... Dropdown Trigger Icon ... */}
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("dashboard")}
                                        >
                                            マイカード
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            マイカードを編集
                                        </Dropdown.Link>
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
                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                {/* Mobile Menu Icon */}
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center h-100">
                        <a
                            href={publicProfileLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={qrCodeLink}
                                alt="QR Code for Public Profile"
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    margin: "20px",
                                }}
                            />
                        </a>
                    </div>
                </div>
                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden text-right pr-4"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <Dropdown.Link href={route("dashboard")}>
                            マイカード
                        </Dropdown.Link>
                        <ResponsiveNavLink href={route("profile.edit")}>
                            マイカードを編集
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("logout")}
                            method="post"
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
