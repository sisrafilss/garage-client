import React from "react";

const FeatureContainer = ({ children, className }) => {
  return <div className={`${className} lg:col-span-8 h-auto`}>{children}</div>;
};

export default FeatureContainer;
