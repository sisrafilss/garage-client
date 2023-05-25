import React from 'react';

const ButtonRegularGreen = ({children, className, onClick}) => {
    return (
        <button onClick={onClick} className={`${className} bg-evergreen px-6 py-2 text-white font-medium rounded text-opacity-90 duration-300 hover:cursor-pointer hover:bg-opacity-90 hover:text-opacity-100 `}>
            {children}
        </button>
    );
};

export default ButtonRegularGreen;