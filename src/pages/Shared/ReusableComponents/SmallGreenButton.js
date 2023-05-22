import React from "react";

const SmallGreenButton = ({ children, className }) => {
  return (
    <button
      className={`${className} text-white text-sm font-medium rounded  transition duration-300  bg-evergreen px-4 py-1 hover:text-opacity-90`}
    >
      {children}
    </button>
  );
};

export default SmallGreenButton;
