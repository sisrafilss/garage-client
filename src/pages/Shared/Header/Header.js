import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="bg-mintfrost py-3">
      <nav className="container flex justify-between max-sm:relative  text-twilight">
        <div>
          <NavLink to="/">GARAGE</NavLink>
        </div>
        {/* <RxHamburgerMenu /> */}
        <GiHamburgerMenu onClick={handleShowMobileMenu} className="sm:hidden" />
        <div
          className={`${
            showMobileMenu ? "block" : "hidden"
          } flex bg-mintfrost  max-sm:flex-col max-sm:absolute max-sm:top-8 max-sm:right-0  max-sm:h-screen max-sm:px-8 max-sm:w-72 max-sm:space-y-2 max-sm:shadow-left  max-sm:rounded my-class sm:flex sm:flex-row  sm:space-x-6 md:space-x-12`}
        >
          <NavLink className=" menu-item" to="/">
            Home
          </NavLink>
          <NavLink className="menu-item" to="/about">
            About
          </NavLink>
          <NavLink className="menu-item" to="/services">
            Services
          </NavLink>
          <NavLink className="menu-item" to="/login">
            Login
          </NavLink>
          <button className="btn btn-green-sm" to="/">
            Get a Quote
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
