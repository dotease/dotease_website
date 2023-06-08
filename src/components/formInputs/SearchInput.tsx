import React from "react";

export default function SearchInput() {
    return (
        <div id="searchArea" className="flex items-center w-full space-y-2 md:space-y-0">
            <a href="#">
                <span className="sr-only">Logo</span>
                <span className="h-10 w-20 rounded-lg bg-gray-200"></span>
            </a>
            <form className="flex">
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

    )
}