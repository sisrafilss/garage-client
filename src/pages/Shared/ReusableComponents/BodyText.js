import React from "react";

const BodyText = ({ children, className }) => {
  return (
    <p className={`${className} text-xs  text-black md:text-sm lg:text-base`}>
      {children}
    </p>
  );
};

export default BodyText;
