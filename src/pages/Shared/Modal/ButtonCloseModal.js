import React from "react";

const ButtonCloseModal = ({onClick}) => {
  return (
    <div className="flex justify-end">
      <button
        className="text-gray-500 hover:text-gray-700"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            fillRule="evenodd"
            d="M10 11.414l4.95 4.95-1.414 1.414L8.586 12l-4.95 4.95-1.414-1.414L6.586 10l-4.95-4.95 1.414-1.414L8.586 8l4.95-4.95 1.414 1.414L10 9.414l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default ButtonCloseModal;
