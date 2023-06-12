import React from "react";

interface LinkProps {
  name: string;
  bg_color: string;
  text_color: string;
  hidden?: boolean;
}

export default function Button({ name, bg_color, text_color, hidden }: LinkProps) {
  const borderColor = bg_color.replace("bg-", "border-");
  const textColorOnHover = text_color.replace("text-", "hover:text-" + bg_color.replace("bg-", ""));

  return (
    <button
      hidden={hidden}
      className={`w-full text-left md:text-center rounded-md px-5 py-2.5 text-sm font-medium hover:bg-white hover:text-black hover:border hover:${borderColor} ${bg_color} ${text_color} ${textColorOnHover}`}
    >
      {name}
    </button>
  );
}
