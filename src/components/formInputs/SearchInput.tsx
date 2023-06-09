import React from "react";
import { BiSearch } from "react-icons/bi"

export default function SearchInput() {
    return (
        <form className="flex mt-4 mb-2 lg:m-0">
            <div className="relative w-full">
                <input
                    className="w-full h-10 rounded-lg border-gray-200 pe-10 pl-3 text-sm placeholder-gray-300 focus:z-10"
                    placeholder="Search..."
                    type="text"
                />

                <button
                    type="submit"
                    className="absolute inset-y-0 end-0 rounded-r-lg p-2 text-gray-600"
                >
                    <span className="sr-only">Submit Search</span>
                  <BiSearch />
                </button>
            </div>
        </form>
    )
}