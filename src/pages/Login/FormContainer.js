import React from "react";

const FormContainer = ({ children, className }) => {
  return (
    <div
      className={` ${className} mx-auto max-w-md bg-black bg-opacity-20 py-10 rounded-md px-5  shadow-lg space-y-8 md:px-8`}
    >
      {children}
    </div>
  );
};

export default FormContainer;
