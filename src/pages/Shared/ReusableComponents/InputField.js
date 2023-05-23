import React from "react";

const InputField = ({ type, label, placeholder, className }) => {
  return (
    <div className={`space-y-1 ${className}`}>
      <label className="text-base ms-1" htmlFor="email">
        {label}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        className="text-sm text-white pl-4 w-full h-10 bg-twilight rounded-full focus:bg-twilight"
      />
    </div>
  );
};

export default InputField;
