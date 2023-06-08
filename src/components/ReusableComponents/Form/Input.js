const Input = ({ label, placeholder, type, className }) => {
  return (
    <div className={`${className} space-y-1`}>
      <label className="text-sm">{label}</label>
      <input
        className="border border-black w-full px-2 h-10 rounded file:-ml-2 file:py-[7px] file:text-sm placeholder:text-sm focus:bg-white focus:bg-opacity-80"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
