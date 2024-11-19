"use client"
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { DarkModeToggle } from "../toggle/DarkModeToggle";

type NavLink = {
  id: number;
  link: string;
  icon?: JSX.Element;
};

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const leftLinks: NavLink[] = [
    { id: 1, link: "about" },
    { id: 2, link: "projects" },
    {
      id: 3,
      link: "https://github.com/shay122990",
      icon: <FaGithub size={24} />,
    },
  ];

  const rightLinks: NavLink[] = [
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full mt-2 pb-2 px-4 dark:bg-grey dark:text-white border-b border-green-500">
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-white md:hidden hover:text-green-500"
      >
        {nav ? (
          <FaTimes size={30} className="dark:text-white" />
        ) : (
          <FaBars size={30} className="dark:text-white text-gray-500" />
        )}
      </div>

      <div className="hidden md:flex w-full justify-between items-center">
        <ul className="flex space-x-4">
          {leftLinks.map(({ id, link, icon }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-800 dark:text-white hover:scale-105 hover:text-green-500 duration-200 link-underline"
            >
              {icon ? (
                <a href={link} target="_blank" rel="noreferrer">
                  {icon}
                </a>
              ) : (
                <Link href={`#${link}`}>{link}</Link>
              )}
            </li>
          ))}
        </ul>

        <Link href="/">
          <Image
            src="/images/logo.gif"
            alt="Logo"
            width={70}
            height={70}
            className="cursor-pointer ml-10"
          />
        </Link>

        <ul className="flex space-x-4 items-center">
          {rightLinks.map(({ id, link }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-800 dark:text-white hover:scale-105 hover:text-green-500 duration-200 link-underline"
            >
              <Link href={`#${link}`}>{link}</Link>
            </li>
          ))}
          <DarkModeToggle />
        </ul>
      </div>

      <div className="md:hidden flex-1 flex justify-center ml-10">
        <Link href="/">
          <Image
            src="/images/logo.gif"
            alt="Logo"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <DarkModeToggle />
      </div>

      {nav && (
        <ul style={{
          background: 'linear-gradient(to right, #3b82f6, #14b8a6)',
          }}
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full text-white">
          {[...leftLinks, ...rightLinks].map(({ id, link, icon }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {icon ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setNav(!nav)}
                >
                  {icon}
                </a>
              ) : (
                <Link onClick={() => setNav(!nav)} href={`#${link}`}>
                  {link}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
