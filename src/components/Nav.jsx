import React, { useEffect, useState } from "react";
import { headerLogo } from "../assets/images";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { navLinks } from "../constants";

const Nav = () => {
  const [showBurger, setShowBurger] = useState(true);

  const toggleMenu = () => {
    setShowBurger((prev) => !prev);
  };

  return (
    <nav className="py-4">
      <div
        className={`flex flex-wrap items-center justify-between mx-auto py-4 px-6 md:px-16 duration-300`}
      >
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        {/* menu for large devices */}
        <div>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((navlink) => (
              <li key={navlink.label}>
                <a
                  href={navlink.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {navlink.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:hidden" onClick={toggleMenu}>
          {showBurger ? (
            <FaXmark className="w-6 h-6 " />
          ) : (
            <FaBars className="w-6 h-6 " />
          )}
        </div>
      </div>
      {/* menu for mobile devices */}
      <div className=" md:hidden block text-center bg-slate-600">
        {showBurger && (
          <ul className="flex-1 flex flex-col justify-center items-center gap-16 py-8">
            {navLinks.map((navlink) => (
              <li key={navlink.label} onClick={toggleMenu}>
                <a
                  href={navlink.href}
                  className="font-montserrat leading-normal text-lg text-slate-200"
                >
                  {navlink.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
