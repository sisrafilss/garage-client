import React from "react";

const LargeGreenOutlineButton = ({ children, className }) => {
  return (
    <button
      className={`${className} text-white text-sm font-medium rounded border border-evergreen rounded-full text-opacity-80 uppercase px-4 py-2 transition duration-300 hover:bg-evergreen hover:text-opacity-90 hover:text-opacity-100 md:px-8 lg:px-12 lg:py-3`}
    >
      {children}
    </button>
  );
};

export default LargeGreenOutlineButton;
