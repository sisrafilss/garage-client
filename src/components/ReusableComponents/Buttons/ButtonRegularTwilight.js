import React from "react";
import { Link } from "react-router-dom";

const ButtonRegularTwilight = ({ children, className, onClick, path }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-twilight px-6 py-2 text-white font-medium rounded text-opacity-90 duration-300 hover:cursor-pointer hover:bg-opacity-90 hover:text-opacity-100 `}
    >
      <Link to={path}>{children}</Link>
    </button>
  );
};

export default ButtonRegularTwilight;
