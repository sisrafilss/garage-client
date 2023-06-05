import React from "react";
import MenuItem from "./MenuItem";
import ButtonSmallGreen from "../ReusableComponents/Buttons/ButtonSmallGreen";


const Navbar = ({ showMobileMenu, openModal }) => {
  return (
    <div
      className={`${
        showMobileMenu ? "block z-10" : "hidden"
      } flex bg-mintfrost  max-sm:flex-col max-sm:absolute max-sm:top-8 max-sm:right-0  max-sm:h-screen max-sm:px-8 max-sm:w-72 max-sm:space-y-2 max-sm:shadow-left  max-sm:rounded my-class sm:flex sm:flex-row  sm:space-x-6 md:space-x-12`}
    >
      <MenuItem to="">Home</MenuItem>
      <MenuItem to="about">About</MenuItem>
      <MenuItem to="services">Services</MenuItem>
      <MenuItem to="login">Login</MenuItem>
      <ButtonSmallGreen onClick={openModal}>Get a Quote</ButtonSmallGreen>
    </div>
  );
};

export default Navbar;
