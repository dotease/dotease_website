import React from "react";
import { BiSearch } from "react-icons/bi"

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
                        <BiSearch />
                    </button>
                </div>
            </form>
        </div>

    )
}