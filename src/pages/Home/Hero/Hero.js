import React, { useState } from "react";
import heroImg from "../../../media/img/hero-img.png";
import HeadingH1 from "../../../components/ReusableComponents/Headings/HeadingH1";
import BodyText from "../../../components/ReusableComponents/Others/BodyText";
import ButtonLargeGreen from "../../../components/ReusableComponents/Buttons/ButtonLargeGreen";
import ButtonLargeGreenOutline from "../../../components/ReusableComponents/Buttons/ButtonLargeGreenOutline";
import QuoteModal from "../../../components/QuoteModal/QuoteModal";

const Hero = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={`bg-twilight ${className}`}>
        <div className="container flex flex-col justify-between py-12 space-x-8 space-y-12 sm:space-y-0 sm:flex-row">
          <div className="flex flex-col  justify-center items-center px-4 text-white space-y-6 sm:items-start sm:space-y-8 sm:w-7/12">
            <HeadingH1>
              Highly Modified Car Repair system And Maintenance
            </HeadingH1>
            <BodyText className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </BodyText>
            <div className="flex justify-between w-full">
              <ButtonLargeGreen onClick={openModal}>
                Get a Quote
              </ButtonLargeGreen>
              <ButtonLargeGreenOutline>Contact Us</ButtonLargeGreenOutline>
            </div>
          </div>
          <div className="shrink-0  sm:w-5/12 hidden sm:flex">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>

      <QuoteModal
        openModal={openModal}
        closeModal={closeModal}
        isOpen={isOpen}
      />
    </>
  );
};

export default Hero;
