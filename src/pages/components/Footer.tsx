import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-indigo-700 font-serif font-semibold text-black py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            className="h-12 w-12 rounded-md"
            src="/images/logo.png"
            alt="logo"
            width={300}
            height={300}
          />
          <div className="text-lg font-semibold text-white p-4">
            Izhar Ahmed
          </div>
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          <Link className="hover:text-white" href="/">
            Home
          </Link>
          <Link className="hover:text-white" href="/about">
            About
          </Link>
          <Link className="hover:text-white" href="/projects">
            Projects
          </Link>
          <Link className="hover:text-white" href="/contact">
            Contact
          </Link>
        </div>

        {/* Social Media Icons */}

        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link
            href="https://www.linkedin.com/in/izhar334"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.5-.777-1.5-1.5s.534-1.5 1.5-1.5 1.5.777 1.5 1.5-.534 1.5-1.5 1.5zm13.5 11.268h-3v-5.412c0-1.376-.028-3.147-1.922-3.147-1.922 0-2.218 1.503-2.218 3.043v5.516h-3v-10h2.886v1.37h.042c.402-.76 1.381-1.563 2.846-1.563 3.044 0 3.605 2.004 3.605 4.608v5.585z" />
            </svg>
          </Link>
          <Link
            href="https://github.com/izhar334"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.091-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.998.108-.775.418-1.305.762-1.605-2.665-.306-5.466-1.333-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.123-.305-.535-1.535.117-3.197 0 0 1.008-.322 3.301 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.293-1.552 3.3-1.23 3.3-1.23.653 1.662.241 2.892.118 3.197.77.84 1.236 1.91 1.236 3.221 0 4.61-2.805 5.625-5.475 5.922.43.372.823 1.103.823 2.222v3.293c0 .322.216.694.825.577 4.765-1.587 8.202-6.084 8.202-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-2 text-balance text-sm text-white">
        © {new Date().getFullYear()} Izhar Ahmed. All rights reserved.
      </div>
    </footer>
  );
}
