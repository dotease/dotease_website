import Link from "next/link";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Button from "dotenv/components/Buttons/Button";
import NavLinkComponent from "dotenv/components/NavLinkComponent";
import SearchInput from "dotenv/components/formInputs/SearchInput";
import ScrollingNavComponent from "dotenv/components/formInputs/ScrollingNavComponent";
import { GiHamburgerMenu } from "react-icons/gi";
import Profile from "dotenv/components/Buttons/Profile";
import LanguageChangeButton from "dotenv/components/LanguageChangeButton";

export default function Header() {
  const [isWrappedAbout, setIsWrappedAbout] = useState<boolean>(true);
  const { data } = useSession();

  function logOut() {
    signOut({ callbackUrl: "/", redirect: true }).catch(e => {
      console.log(e);
    });
  }

  function toggleWrapAbout() {
    setIsWrappedAbout(!isWrappedAbout);
  }

  function handleLogin() {
    if (!data) {
      return (
        <div className="flex justify-center gap-20 sm:gap-3">
          <Link href={"/auth/login"}>
            <Button name={"Login"} text_color={"text-white"} bg_color={"bg-primary-600"} />
          </Link>
          <Link href={"/auth/register"}>
            <Button name={"Register"} text_color={"text-primary-600"} bg_color={"bg-gray-100"} />
          </Link>
        </div>
      );
    } else {
      return (
        <div className="sm:flex sm:gap-4">
          <button className="rounded-md bg-primary-600 px-5 py-2.5 text-sm font-medium text-white shadow" onClick={logOut}>
            Logout
          </button>
        </div>
      );
    }
  }

  const linkList: { link: string; name: string }[] = [
    {
      link: "/",
      name: "About",
    },
    {
      link: "https://github.com/dotease/dotease",
      name: "GitHub",
    },
    {
      link: "/",
      name: "Contact",
    },
  ];

  const linkAccountList: {
    link?: string;
    callback?: () => void;
    name: string;
    isButton: boolean;
  }[] = [
    {
      link: "/profile",
      name: "Profile",
      isButton: false,
    },
    {
      callback: logOut,
      name: "Log Out",
      isButton: true,
    },
  ];

  return (
    <header aria-label="Site Header" className="bg-white sticky top-0">
      <div className="flex flex-col mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-stretch md:gap-12">
            <Link className="block text-primary-600 text-3xl" href="/">
              <p>.ease</p>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className={"flex items-center justify-center"}>
              <div className={"w-20 mx-4"}>
                <LanguageChangeButton label={false} />
              </div>
              <NavLinkComponent linkList={linkList} mainLabel={"Site Nav"} />
            </div>
          </div>

          <div className="flex items-center gap-5">
            {data?.user && (
              <div className="hidden md:flex">
                <Profile />
              </div>
            )}
            <div className="hidden md:flex">{handleLogin()}</div>

            <div className="block md:hidden">
              <button onClick={toggleWrapAbout} className="rounded bg-gray-100 p-2 text-gray-600 hover:text-gray-600/75">
                <GiHamburgerMenu className={`transition-transform ease-in-out ${isWrappedAbout ? "" : "rotate-90"}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={"fixed z-10 w-full transition-transform ease-in-out md:hidden " + (isWrappedAbout ? "translate-x-full" : "")}>
        <div className="flex flex-row-reverse h-screen justify-between content-end">
          <div className="w-4/5 bg-white px-4 border-s border-t">
            <SearchInput />
            <LanguageChangeButton />
            <NavLinkComponent linkList={linkList} mainLabel={"Site Nav"} />
            {!!data ? (
              <ScrollingNavComponent navTitle={"Account"} linkList={linkAccountList} />
            ) : (
              <div className="flex flex-col space-y-2 mt-2 border-t pt-4">
                <Link href={"/auth/login"}>
                  <Button name={"Login"} text_color={"text-white"} bg_color={"bg-primaryf-600"} />
                </Link>
                <Link href={"/auth/register"}>
                  <Button name={"Register"} text_color={"text-primary-600"} bg_color={"bg-gray-100"} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
