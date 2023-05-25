import React from "react";
import { Link } from "react-router-dom";

const LinkedButton = ({ children, to, className }) => {
  return (
    <span
      className={`${className} text-turquoise cursor-pointer hover:underline`}
    >
      <Link to={to}>{children}</Link>
    </span>
  );
};

export default LinkedButton;
