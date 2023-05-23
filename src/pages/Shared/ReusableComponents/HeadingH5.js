import React from "react";

const HeadingH5 = ({ children, className }) => {
  return (
    <h5 className={`${className} text-base font-medium md:text-lg`}>
      {children}
    </h5>
  );
};

export default HeadingH5;
