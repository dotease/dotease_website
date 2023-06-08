import React from "react";

interface LinkProps {
    name: string,
    bg_color: string,
    text_color: string,
    hidden?: boolean,
}

export default function Button({name, bg_color, text_color, hidden}: LinkProps) {
    return (
        <button
            hidden={hidden}
            className={`w-full text-left md:text-center rounded-md px-5 py-2.5 text-sm font-medium ${bg_color} ${text_color}`}
        >
            {name}
        </button>
    )
}