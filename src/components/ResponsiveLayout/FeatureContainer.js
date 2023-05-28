import React from "react";

const FeatureContainer = ({ children, className }) => {
  return <div className={`${className} lg:col-span-8`}>{children}</div>;
};

export default FeatureContainer;
