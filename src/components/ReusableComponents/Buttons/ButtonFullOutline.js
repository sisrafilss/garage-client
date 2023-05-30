const ButtonFullOutline = ({ children, className }) => {
  return <button className={`${className} text-twilight font-medium w-full border-[1px] border-twilight py-3 text-base rounded-full duration-300 hover:bg-twilight hover:text-white`}>{children}</button>;
};

export default ButtonFullOutline;
