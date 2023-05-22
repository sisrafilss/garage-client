import React from "react";

const HeadingH1 = ({ children, className }) => {
  return (
    <h1 className={`${className} text-3xl md:text-4xl xl:text-6xl`}>
      {children}
    </h1>
  );
};

export default HeadingH1;
