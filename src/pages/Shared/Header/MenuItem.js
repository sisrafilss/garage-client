import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ children, className, to }) => {
  return (
    <NavLink
      className={`${className} font-medium hover:text-evergreen transition duration-300`}
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default MenuItem;