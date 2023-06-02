import React from "react";

interface ScrollingNavProps {
    navTitle: string,
    linkList: linkListType[]
}

interface linkListType {
    link?: string
    callback?: () => void,
    name: string,
    isButton: boolean
}

export default function ScrollingNavComponent({navTitle, linkList}: ScrollingNavProps) {
    return (
        <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
                className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium"> {navTitle} </span>
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
                <ul>
                    {linkList.map(e =>
                    <li key={e.name}>
                        {e.isButton ?
                            <button
                                type="submit"
                                className="flex w-full items-center gap-2 rounded-lg px-4 py-2 my-0.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                                <span className="text-sm font-medium" onClick={e.callback}> {e.name} </span>
                            </button>
                        :
                            <a
                                href={e.link}
                                className="flex items-center gap-2 rounded-lg px-4 py-2 my-0.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                <span className="text-sm font-medium"> {e.name} </span>
                            </a>
                        }
                    </li>
                    )}
                </ul>
            </nav>
        </details>
    )
}