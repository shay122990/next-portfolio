"use client"
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
    {
      id: 6,
      link: "https://github.com/shay122990",
      icon: <FaGithub size={24} />,
    },
    {
      id: 7,
      link: "https://www.linkedin.com/in/shay-asanova90/",
      icon: <FaLinkedin size={24} />,
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div className="ml-2">
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

      <ul className="hidden md:flex">
        {links.map(({ id, link, icon }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
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

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, icon }) => (
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

