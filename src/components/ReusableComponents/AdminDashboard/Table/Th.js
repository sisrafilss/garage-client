import React from "react";

const Th = ({ className, children }) => {
  return (
    <th
      className={`${className} border border-white-smoke border-opacity-50 font-medium py-4`}
    >
      {children}
    </th>
  );
};

export default Th;
