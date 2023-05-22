import React from "react";

const AttentionBox = ({ info1, info2 }) => {
  return (
    <div className="ring-2 ring-honeydew px-4 py-2 my-2 flex justify-between items-center space-x-6 lg:px-6 lg:py-4 lg:space-x-8">
      <span className="text-evergreen text-xl font-semibold lg:text-2xl">
        {info1}
      </span>
      <span className="text-black font-semibold text-base capitalize lg:text-lg">
        {info2}
      </span>
    </div>
  );
};

export default AttentionBox;
