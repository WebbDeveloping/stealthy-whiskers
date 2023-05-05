import React, { useState, useEffect } from "react";
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
      className={`fixed top-0 w-full flex flex-col  py-4 z-50 ${navBackground}`}
    >
      <div className="flex justify-between items-center px-6 py-3">
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
      </div>
      <NavDropdown isMenuOpen={isMenuOpen} />
    </nav>
  );
};

export default Navigation;
