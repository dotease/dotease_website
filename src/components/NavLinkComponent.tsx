import Link from "next/link";
import React from "react";
import SearchInput from "dotenv/components/formInputs/SearchInput";

interface NavProps {
  linkList: { link: string; name: string }[];
  mainLabel: string;
}

export default function NavLinkComponent({ linkList, mainLabel }: NavProps) {
  return (
    <nav aria-label={mainLabel}>
      <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-sm">
        <div className="hidden lg:flex">
          <SearchInput />
        </div>
        {linkList.map((e: { link: string; name: string }) => (
          <li key={e.name}>
            <Link className="hidden lg:flex text-gray-500 transition hover:text-gray-500/75" href={e.link}>
              {e.name}
            </Link>
            <Link href={e.link} className="flex lg:hidden items-center gap-2 rounded-lg focus:bg-gray-100 px-4 py-2 text-gray-700">
              <span className="text-sm font-medium"> {e.name} </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
