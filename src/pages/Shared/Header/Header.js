import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between px-6 py-3 bg-mintfrost text-twilight">
      <div>
        <Link to="/">GARAGE</Link>
      </div>
      <div>
        <Link   className=" menu-item active" to="/">Home</Link>
        <Link   className="menu-item" to="/about">About</Link>
        <Link   className="menu-item" to="/services">Services</Link>
        <Link   className="menu-item" to="/login">Login</Link>
        <button className="btn" to="/">Get a Quote</button>
      </div>
    </nav>
  );
};

export default Header;
