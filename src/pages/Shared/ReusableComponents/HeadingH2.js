import React from "react";

const HeadingH2 = ({ children, className }) => {
  return (
    <h2
      className={`${className} text-black font-bold text-center capitalize text-2xl sm:text-left md:text-4xl`}
    >
      {children}
    </h2>
  );
};

export default HeadingH2;
