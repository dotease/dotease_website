import Link from "next/link";
import React from "react";

export default class Header extends React.Component{

    state = {
        isWrappedAbout: false,
        isWrappedResearch: false,
        isLoggedIn: true
    }

    toggleWrapAbout = ()=> {
        this.setState({
            isWrappedAbout: !this.state.isWrappedAbout,
            isWrappedResearch: this.state.isWrappedResearch,
            isLoggedIn: true
        })
    }

    toggleWrapResearch = () => {
        this.setState({
            isWrappedAbout: this.state.isWrappedAbout,
            isWrappedResearch: !this.state.isWrappedResearch,
            isLoggedIn: true
        })
    }

    handleLogin = () => {
        if (!this.state.isLoggedIn) {
            return (
                <div className="flex justify-center gap-20 sm:gap-3">
                    <Link
                        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                        href="/"
                    >
                        Login
                    </Link>
                    <Link
                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                        href="/"
                    >
                        Register
                    </Link>
                </div>
            )
        }
        else {
            return (
                <div className="sm:flex sm:gap-4">
                    <Link
                        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                        href="/"
                    >
                        Logout
                    </Link>
                </div>
            )
        }
    }

    render() {
        return (
            <header aria-label="Site Header" className="bg-white">
                <div className="flex flex-col mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="md:flex md:items-stretch md:gap-12">
                            <Link className="block text-teal-600 text-3xl" href="/">
                                <p>.ease</p>
                            </Link>
                        </div>

                        <div className="hidden md:block">
                            <nav aria-label="Site Nav">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li>
                                        <Link
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="/"
                                        >
                                            About
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="/"
                                        >
                                            GitHub
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="/"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="flex items-center gap-5">
                            <div id="searchArea" className="flex items-center gap-4">
                                <a href="#">
                                    <span className="sr-only">Logo</span>
                                    <span className="h-10 w-20 rounded-lg bg-gray-200"></span>
                                </a>

                                <form className="mb-0 hidden lg:flex">
                                    <div className="relative">
                                        <input
                                            className="h-10 rounded-lg border-gray-200 pe-10 pl-3 text-sm placeholder-gray-300 focus:z-10"
                                            placeholder="Search..."
                                            type="text"
                                        />

                                        <button
                                            type="submit"
                                            className="absolute inset-y-0 end-0 rounded-r-lg p-2 text-gray-600"
                                        >
                                            <span className="sr-only">Submit Search</span>
                                            <svg
                                                className="h-5 w-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    clipRule="evenodd"
                                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                    fillRule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="hidden md:flex">
                                {this.handleLogin()}
                            </div>

                            <div className="block md:hidden">
                                <button
                                    onClick={this.toggleWrapAbout}
                                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={
                    "fixed z-10 w-full transition-transform ease-in-out md:hidden " +
                    (this.state.isWrappedAbout ? "translate-x-full" : "")}
                >
                    <div className="flex flex-row-reverse h-screen justify-between content-end">
                        <div className="w-4/5 bg-white px-4 border-s border-t">
                            <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
                                <form className="mb-0 lg:flex">
                                    <div className="relative">
                                        <input
                                            className="h-10 rounded-lg border-gray-200 pe-10 pl-3 text-sm placeholder-gray-300 focus:z-10 w-full"
                                            placeholder="Search..."
                                            type="text"
                                        />

                                        <button
                                            type="submit"
                                            className="absolute inset-y-0 end-0 rounded-r-lg p-2 text-gray-600"
                                        >
                                            <span className="sr-only">Submit Search</span>
                                            <svg
                                                className="h-5 w-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    clipRule="evenodd"
                                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                    fillRule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                                <a
                                    href="#"
                                    className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700"
                                >
                                    <span className="text-sm font-medium"> About </span>
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    <span className="text-sm font-medium"> Github </span>
                                </a>

                                <a
                                    href="#"
                                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    <span className="text-sm font-medium"> Contact </span>
                                </a>
                                <details hidden={!this.state.isLoggedIn} className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary
                                        className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        <div className="flex items-center gap-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 opacity-75"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                />
                                            </svg>

                                            <span className="text-sm font-medium"> Account </span>
                                        </div>

                                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                          <path
                                              fillRule="evenodd"
                                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                              clipRule="evenodd"
                                          />
                                        </svg>
                                    </span>
                                    </summary>

                                    <nav aria-label="Account Nav" className="mt-2 flex flex-col px-4">
                                        <a
                                            href="#"
                                            className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 opacity-75"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                                                />
                                            </svg>

                                            <span className="text-sm font-medium"> Details </span>
                                        </a>
                                        <form action="/logout">
                                            <button
                                                type="submit"
                                                className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 opacity-75"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                    />
                                                </svg>

                                                <span className="text-sm font-medium"> Logout </span>
                                            </button>
                                        </form>
                                    </nav>

                                </details>
                                <Link
                                    hidden={this.state.isLoggedIn}
                                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                    href="/"
                                >
                                    Login
                                </Link>
                                <Link
                                    hidden={this.state.isLoggedIn}
                                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                                    href="/"
                                >
                                    Register
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}