import React from "react";

const HeadingH3 = ({ className, children }) => {
  return <h3 className={`${className} font-bold text-xl sm:text-2xl text-twilight`}>{children}</h3>;
};

export default HeadingH3;
