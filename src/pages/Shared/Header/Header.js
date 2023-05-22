import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import SmallGreenButton from "../ReusableComponents/SmallGreenButton";
import MenuItem from "./MenuItem";
import Navbar from "./Navbar";

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
        <GiHamburgerMenu onClick={handleShowMobileMenu} className="sm:hidden" />
        <Navbar showMobileMenu={showMobileMenu} />
      </nav>
    </div>
  );
};

export default Header;
