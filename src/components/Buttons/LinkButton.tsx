import Link from "next/link";
import React from "react";

interface LinkProps {
    name: string,
    link: string,
    bg_color: string,
    text_color: string,
    hidden?: boolean,
}

export default function LinkButton({name, link, bg_color, text_color, hidden}: LinkProps) {
    return (
        <Link
            hidden={hidden}
            className={`rounded-md px-5 py-2.5 text-sm font-medium ${bg_color} ${text_color}`}
            href={link}
        >
            {name}
        </Link>
    )
}