import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
   <div className="bg-mintfrost py-3">
     <nav className="container flex justify-between   text-twilight">
      <div>
        <NavLink to="/">GARAGE</NavLink>
      </div>
      <div className="flex space-x-12">
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
