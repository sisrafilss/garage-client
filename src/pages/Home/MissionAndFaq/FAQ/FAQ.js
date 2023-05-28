import React from "react";
import Subtitle from "../../../Shared/ReusableComponents/Subtitle";
import FAQBody from "./FAQBody";

const FAQ = ({ faqData, activeIndex, handleAccordion, title }) => {

  console.log(faqData);

  return (
    <>
      <Subtitle className="mb-0 sm:text-left">{title}</Subtitle>
      <FAQBody
        faqData={faqData}
        activeIndex={activeIndex}
        handleAccordion={handleAccordion}
      />
    </>
  );
};

export default FAQ;
