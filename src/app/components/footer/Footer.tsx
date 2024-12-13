import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
 

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
          <span>2024</span>. 
        </p>
        <p className="text-sm text-grey dark:text-white">Dubai, UAE</p>
      </div>
    </footer>
  );
}
