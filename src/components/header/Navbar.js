import { dataNavLinks } from "@/data/dataNavLinks";
import { Button } from "@nextui-org/react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BurgerMenu from "./btnNavResponsive/BurgerMenu";

export default function Navbar() {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleSignOut = () => {
    signOut();
  };

  const handleClick = () => {
    setShowModal(true);
  };

  const handleLinkClick = () => {
    setShowModal(false);
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageY;
      setScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-black text-white list-none absolute top-0 left-0 right-0 z-20 ${
        scrolled ? "" : "md:bg-transparent"
      }`}
    >
      <div className="container flex justify-between ">
        <Link href="/">
          <div className="flex items-center justify-between h-16">
            <li className="font-black text-2xl">
              Neo<span className="text-[#EBA24E]">Arcade</span>
            </li>
            <div className="-mr-2 flex md:hidden">
              <BurgerMenu />
            </div>
          </div>
        </Link>
        <ul className="flex items-center justify-between">
          <div className="hidden md:block">
            <div className="ml-10 flex gap-5 uppercase items-center">
              {dataNavLinks.map(({ link, id, title }) => (
                <Link href={link} key={id}>
                  <li
                    className="hover:text-[#ffb82a] hover:underline text-sm font-medium"
                    onClick={handleLinkClick}
                  >
                    {title}
                  </li>
                </Link>
              ))}
              {session ? (
                <Button auto ghost onClick={handleSignOut}>
                  Sign Out
                </Button>
              ) : (
                <Link href="/login">
                  <Button auto ghost>
                    Se connecter
                  </Button>
                </Link>
              )}
              <div className="relative">
                <img
                  src={session?.user.image}
                  alt={session?.user.image}
                  onClick={handleMenuToggle}
                  className="cursor-pointer rounded-full w-16"
                />
                {showMenu && (
                  <ul className="absolute right-0 mt-2 bg-white text-black py-2 rounded shadow">
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      <Link href="/settings">Paramètres</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      <Link href="/profile">Profil</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      <Link href="/dashboard">Tableau de bord</Link>
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={handleSignOut}
                    >
                      Déconnexion
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </ul>
      </div>
      <div
        className={`${
          showModal ? "block" : "hidden"
        } md:hidden bg-black px-2 pt-2 pb-3`}
      >
        {dataNavLinks.map(({ link, title, id }) => (
          <Link href={link} key={id}>
            <li
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
              onClick={handleLinkClick}
            >
              {title}
            </li>
          </Link>
        ))}
      </div>
    </div>
  );
}
