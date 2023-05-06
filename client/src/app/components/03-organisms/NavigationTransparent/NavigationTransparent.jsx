import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavDropdown from "../../02-molecules/NavDropdown/NavDropdown";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setIsScrolled(scrollPosition > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBackground = isScrolled ? "bg-white" : "transparent";
  const navText = isScrolled ? "text-black" : "text-white";
  const hamburgerLines = isScrolled ? "bg-black" : "bg-white";

  return (
    <nav
      className={`fixed top-0 w-full flex flex-col md:flex-row   py-1 z-50 ${navBackground}`}
    >
      <div className="flex justify-between items-center px-6 py-3">
        <NavLink to="/">
          <div className={`font-semibold text-sm uppercase ${navText}`}>
            Stealthy
            <br />
            Whiskers
          </div>
        </NavLink>
        <div className="flex items-center md:hidden">
          <div
            className="menu-button w-nav-button max-w-[28px] max-h-[28px]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-8 h-[3px] my-1 ${hamburgerLines}`}></div>
            <div className={`w-6 h-[3px] my-1 ${hamburgerLines}`}></div>
            <div className={`w-8 h-[3px] my-1 ${hamburgerLines}`}></div>
          </div>
        </div>
      </div>
      <div
        className={`${navText} md:flex w-full justify-end md:items-center text-center bg-white md:bg-transparent ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <NavLink
          to="/"
          className="block md:inline-block font-medium text-xs weight-thin uppercase py-6 border-b border-t border-[#e4e9ec] mx-4 md:border-0"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="block md:inline-block font-medium text-xs weight-thin uppercase py-6 border-b border-[#e4e9ec] mx-4 md:border-0"
        >
          About
        </NavLink>
        <NavLink
          to="/products"
          className="block md:inline-block font-medium text-xs weight-thin uppercase py-6 border-b border-[#e4e9ec] mx-4 md:border-0"
        >
          Shop
        </NavLink>
        <NavLink
          to="/contact"
          className="block md:inline-block font-medium text-xs weight-thin uppercase py-6 border-b border-[#e4e9ec] mx-4 md:border-0"
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
