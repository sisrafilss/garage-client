import React from "react";

const SectionWrapper = ({ children, className }) => {
  return (
    <div
      className={`space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-20 ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
