import React from "react";

const InputField = ({ type, label, placeholder, className }) => {
  return (
    <div className={`space-y-1 ${className}`}>
      <label className="text-base ms-1 text-white" htmlFor="">
        {label}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        className="text-sm text-black text-opacity-100 pl-4 w-full h-10 bg-light-gray bg-opacity-100 rounded focus:bg-white focus:outline-none"
      />
    </div>
  );
};

export default InputField;
