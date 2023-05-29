import React from "react";

const Input = ({ label, placeholder, type, className }) => {
  return (
    <div className={`${className} space-y-1`}>
      <label className="text-sm">{label}</label>
      <input
        className="bg-light-gray w-full px-2 h-10 rounded outline-light-gray focus:bg-white focus:bg-opacity-80"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
