import React from "react";

const ButtonSmallGreen = ({ children, className, onClick }) => {
  return (
    <button
      className={`${className} text-white text-lg font-medium rounded  transition duration-300  bg-evergreen px-4 py-1 hover:text-opacity-90`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonSmallGreen;
