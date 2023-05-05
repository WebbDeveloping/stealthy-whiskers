import React from "react";
import NavDropdown from "../../02-molecules/NavDropdown/NavDropdown";

export default function NavigationWhite() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav
      className={`fixed top-0 w-full flex flex-col justify-between z-50 bg-white pb-4`}
    >
      <div className="flex w-full justify-between px-4 py-4">
        <a href="/">
          <div className={`font-semibold text-sm uppercase text-black`}>
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
            <div className={`w-8 h-[3px] my-1 bg-black`}></div>
            <div className={`w-6 h-[3px] my-1 bg-black`}></div>
            <div className={`w-8 h-[3px] my-1 bg-black`}></div>
          </div>
        </div>
      </div>
      <NavDropdown isMenuOpen={isMenuOpen} />
    </nav>
  );
}
