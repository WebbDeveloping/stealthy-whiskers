import React, { useState, useEffect } from "react";

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
      className={`fixed top-0 w-full flex justify-between items-center px-6 py-4 z-50 ${navBackground}`}
    >
      <a href="/">
        <div className={`font-semibold text-sm uppercase ${navText}`}>
          Stealthy
          <br />
          Whiskers
        </div>
      </a>
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
      <div
        className={`${navText} md:flex md:items-center ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <a
          href="/"
          className="block md:inline-block mt-4 md:mt-0 mx-4 text-lg font-medium"
        >
          Home
        </a>
        <a
          href="/"
          className="block md:inline-block mt-4 md:mt-0 mx-4 text-lg font-medium"
        >
          About
        </a>
        <a
          href="/"
          className="block md:inline-block mt-4 md:mt-0 mx-4 text-lg font-medium"
        >
          Services
        </a>
        <a
          href="/"
          className="block md:inline-block mt-4 md:mt-0 mx-4 text-lg font-medium"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
