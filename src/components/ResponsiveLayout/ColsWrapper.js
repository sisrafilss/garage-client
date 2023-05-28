import React from "react";

const ColsWrapper = ({ children, className }) => {
  return (
    <div className={`${className} container lg:grid lg:grid-cols-12 lg:gap-4`}>
      {children}
    </div>
  );
};

export default ColsWrapper;
