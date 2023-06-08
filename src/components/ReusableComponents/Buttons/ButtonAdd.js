import { AiOutlinePlus } from "react-icons/ai";

const ButtonAdd = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} flex items-center space-x-2  bg-opacity-90 pl-3 pr-4 py-2 text-opacity-90 font-medium rounded  duration-300 hover:cursor-pointer hover:bg-opacity-100 hover:text-opacity-100 `}
    >
      <AiOutlinePlus />
      <span>{children}</span>
    </button>
  );
};

export default ButtonAdd;
