import React from 'react';
import ModalContainer from '../../pages/Shared/Modal/ModalContainer';
import HeadingH3 from '../../pages/Shared/ReusableComponents/HeadingH3';
import BodyText from '../../pages/Shared/ReusableComponents/BodyText';
import ButtonRegularGreen from '../../pages/Shared/Buttons/ButtonRegularGreen';

const QuoteModal = ({openModal, closeModal, isOpen}) => {
    return (
        <ModalContainer
        className="space-y-4"
        openModal={openModal}
        closeModal={closeModal}
        isOpen={isOpen}
      >
        <HeadingH3 className="text-center">
          The easiest way to take care of your car
        </HeadingH3>
        <BodyText className="text-center">
          Hassle-free Service and Car Repair
        </BodyText>
        <input
          className="w-full h-10 border border-twilight py-4 px-4 rounded"
          type="text"
          placeholder="Enter your Car Name and Model"
        />
        <ButtonRegularGreen onClick={closeModal} path="/select-service">
          Get an Instant Quote
        </ButtonRegularGreen>
      </ModalContainer>
    );
};

export default QuoteModal;