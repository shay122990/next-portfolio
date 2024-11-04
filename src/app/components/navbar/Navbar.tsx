"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative flex items-center justify-between p-4 border-b">
      <div className="flex-1 flex ">
        <Image src="/images/logo.gif" width={50} height={50} alt="logo image" />
      </div>

      <button
        onClick={toggleMenu}
        className="md:hidden text-gray-800 dark:text-white ml-auto" 
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
      >
        {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
      </button>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed top-0 right-0 w-2/3 h-full bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out md:static md:flex md:items-center md:w-auto md:block`}
        style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        {isMenuOpen && (
          <button onClick={toggleMenu} className="absolute top-4 left-4 text-gray-800 dark:text-white" aria-label="Close Menu">
            <FaTimes className="text-2xl" />
          </button>
        )}
        
        <div className="flex flex-col items-end p-4 md:p-0 md:flex-row md:space-x-6 md:text-gray-800 md:dark:text-white">
          <ul className="flex flex-col md:flex-row md:space-x-6 md:text-gray-800 md:dark:text-white">
            <li className="p-2">
              <Link href="#about">About</Link>
            </li>
            <li className="p-2">
              <Link href="#projects">Projects</Link>
            </li>
            <li className="p-2">
              <Link href="#services-tech-stack">Services</Link>
            </li>
            <li className="p-2">
              <Link href="#contact">Contact</Link>
            </li>
            <li className="p-2">
              <Link href="https://github.com/shay122990" target="_blank" rel="noreferrer" aria-label="GitHub Profile">
                <FaGithub className="w-6 h-6 text-gray-800 dark:text-white" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
