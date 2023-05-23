import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "./Navbar";
import Logo from "../ReusableComponents/Logo";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="bg-mintfrost py-3">
      <nav className="container flex justify-between max-sm:relative  text-twilight">
        <div>
          <Logo />
        </div>
        <GiHamburgerMenu onClick={handleShowMobileMenu} className="sm:hidden" />
        <Navbar showMobileMenu={showMobileMenu} />
      </nav>
    </div>
  );
};

export default Header;
