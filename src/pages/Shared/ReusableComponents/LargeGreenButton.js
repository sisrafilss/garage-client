import React from "react";

const LargeGreenButton = ({ children, className, onClick }) => {
  return (
    <button
    onClick={onClick}
      className={`${className} text-white text-sm font-medium rounded transition duration-300  rounded-full bg-evergreen px-4 py-2 uppercase hover:text-opacity-90 hover:text-opacity-80  md:px-8 lg:px-12 lg:py-3`}
    >
      {children}
    </button>
  );
};

export default LargeGreenButton;
