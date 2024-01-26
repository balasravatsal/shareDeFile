import Image from "next/image";
import React from "react";

export default function Headers() {
  
  return (
    <div>
      <header className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a className="block text-blue-600" href="/">
            <span className="sr-only">Home</span>
            <Image src="/logo-black.svg" width={100} height={100} alt="Share" />
          </a>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-l">
                <li>
                  <a
                    className="text-[#111827] text-2xl transition hover:text-gray-100/75"
                    href="/"
                  >
                    {" "}
                    Home{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-[#111827] text-2xl transition hover:text-gray-100/75"
                    href="/upload"
                  >
                    {" "}
                    Upload{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-[#111827] text-2xl transition hover:text-gray-100/75"
                    href="/contact"
                  >
                    {" "}
                    Contact{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-[#111827] text-2xl transition hover:text-gray-100/75"
                    href="/about"
                  >
                    {" "}
                    About Me{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="block rounded-md border-blue-600 bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-600"
                  href="/files"
                >
                  Get Started
                </a>
              </div>

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
