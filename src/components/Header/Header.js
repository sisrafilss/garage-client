import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "./Navbar";
import Logo from "../ReusableComponents/Others/Logo";
import QuoteModal from "../QuoteModal/QuoteModal";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="bg-mintfrost py-3">
        <nav className="container flex justify-between max-sm:relative  text-twilight">
          <div>
            <Logo />
          </div>
          <GiHamburgerMenu
            onClick={handleShowMobileMenu}
            className="sm:hidden"
          />
          <Navbar openModal={openModal} showMobileMenu={showMobileMenu} />
        </nav>
      </div>

      <QuoteModal
        openModal={openModal}
        closeModal={closeModal}
        isOpen={isOpen}
      />
    </>
  );
};

export default Header;
