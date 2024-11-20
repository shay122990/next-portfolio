"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-grey border-t border-lime-400 py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link
            href="https://github.com/shay122990"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="text-grey hover:text-lime-500"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/shay-asanova90/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="text-grey hover:text-lime-500"
          >
            <FaLinkedin size={24} />
          </Link>
        </div>
        <p className="text-sm text-grey dark:text-white">
          © Shay Development{" "}
          <span>{currentYear ?? "..."}</span>. 
        </p>
        <p className="text-sm text-grey dark:text-white">Dubai, UAE</p>
      </div>
    </footer>
  );
}
