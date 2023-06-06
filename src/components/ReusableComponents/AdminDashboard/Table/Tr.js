import React from "react";

const Tr = ({ className, children }) => {
  return (
    <tr
      className={`${className} text-center`}
    >
      {children}
    </tr>
  );
};

export default Tr;
