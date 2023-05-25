import React from "react";

const FormWrapper = ({ children, className }) => {
  return (
    <div
      className={`bg-twilight  py-14 md:py-16 lg:py-18 xl:py-20 ${className}`}
    >
      <div className="container  space-y-5 md:space-y-8">{children}</div>
    </div>
  );
};

export default FormWrapper;
