import React from 'react';
import HeadingH3 from '../../Shared/ReusableComponents/HeadingH3';
import ButtonRegularGreen from '../../Shared/Buttons/ButtonRegularGreen';
import { useNavigate } from 'react-router-dom';

const TotalAtBottom = ({totalPrice, className}) => {

    const navigate = useNavigate();

    const handleNvigatge = () => {
        navigate("/checkout/schedule");
    }

    return (
        <div className={`shadow-black shadow-2xl fixed left-0 bottom-0 w-full z-10 bg-white  pb-4 ${className}`}>
        <hr className="mb-4 borde" />
        <div className="container">
          <div className="flex justify-end space-x-16 items-center">
            <HeadingH3>Total: ${totalPrice}</HeadingH3>
            <ButtonRegularGreen onClick={handleNvigatge} ><span className="text-white text-opacity-100">Next &raquo;</span></ButtonRegularGreen>
          </div>
        </div>
      </div>
    );
};

export default TotalAtBottom;