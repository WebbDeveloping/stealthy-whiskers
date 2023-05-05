import React from "react";

export default function NavDropdown({ isMenuOpen }) {
  return (
    <div
      className={`text-black md:flex w-full justify-end md:items-center text-center bg-white md:bg-transparent ${
        isMenuOpen ? "block" : "hidden"
      }`}
    >
      <a
        href="/"
        className="block md:inline-block font-medium text-xs weight-thin uppercase py-6 border-b border-t border-[#e4e9ec] mx-4"
      >
        Home
      </a>
      <a
        href="/"
        className="block md:inline-block font-medium text-xs weight-thin uppercase py-6 border-b border-[#e4e9ec] mx-4"
      >
        About
      </a>
      <a
        href="/"
        className="block md:inline-block font-medium text-xs weight-thin uppercase py-6 border-b border-[#e4e9ec] mx-4"
      >
        Services
      </a>
      <a
        href="/"
        className="block md:inline-block font-medium text-xs weight-thin uppercase py-6 border-b border-[#e4e9ec] mx-4"
      >
        Contact
      </a>
    </div>
  );
}
