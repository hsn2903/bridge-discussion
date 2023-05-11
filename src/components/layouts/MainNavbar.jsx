import Link from "next/link";
import React, { useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import Logo from "./Logo";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 1, text: "", url: "/" },
    // { id: 2, text: "How it works", url: "#how" },
    { id: 3, text: "About", url: "/about" },
    { id: 4, text: "Blog", url: "/blog" },
    { id: 5, text: `Purpose&Rules`, url: "/purpose" },
    { id: 6, text: "Meeting", url: "/meeting" },
    { id: 7, text: "Login", url: "/login" },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md bg-gray-50">
      <div
        className={`w-[95%] mx-auto font-medium relative flex items-center `}
      >
        {/* nav-center */}
        <div
          className={`w-full mx-auto md:h-auto gap-6 md:gap-0 md:flex md:items-center md:justify-between ${
            isOpen
              ? "bg-gray-50 backdrop-blur-md opacity-90 md:opacity-100 h-screen"
              : ""
          }`}
        >
          {/* nav-header */}
          <div className="w-full flex justify-between items-center h-20">
            <Link href="#">
              <Logo />
            </Link>

            <button
              className="inline-block md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <IoCloseOutline className="w-8 h-8 hover:w-9 hover:h-9 transition-all" />
              ) : (
                <IoMenuOutline className="w-8 h-8" />
              )}
            </button>
          </div>

          <nav className={`md:block ${isOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col gap-4 md:flex-row md:gap-4 md:justify-center tracking-wide">
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id}>
                    <Link
                      href={url}
                      className="inline-block hover:text-green-700 transition-all hover:ml-2 md:hover:ml-0"
                      onClick={() => setIsOpen(false)}
                    >
                      <div> {text}</div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div
            className={`flex gap-2 justify-center items-center my-8 md:my-0 md:flex md:ml-8 ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <Link
              href="/"
              className="block text-green-600 py-2 px-4 rounded-full border-[2px] border-green-500 shadow-md hover:shadow-lg inset-1 hover:text-green-500"
            >
              Get&nbsp;in&nbsp;touch
            </Link>

            <Link
              href="/"
              className=" bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-600 transition-all duration-100 flex items-center inset-1"
            >
              Sign&nbsp;up&nbsp;free
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNavbar;
