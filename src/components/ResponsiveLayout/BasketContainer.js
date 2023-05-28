import React from "react";

const BasketContainer = ({ children, className }) => {
  return (
    <div className={`${className} hidden lg:block lg:col-span-4`}>
      {children}
    </div>
  );
};

export default BasketContainer;
