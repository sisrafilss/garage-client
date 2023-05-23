import React from "react";
import { Collapse } from "react-collapse";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import BodyText from "../../Shared/ReusableComponents/BodyText";
import Subtitle from "../../Shared/ReusableComponents/Subtitle";
import HeadingH5 from "../../Shared/ReusableComponents/HeadingH5";

const FAQ = ({ faqData, activeIndex, handleAccordion }) => {
  return (
    <>
      <Subtitle className="mb-0 sm:text-left">frequently asked questions</Subtitle>
      <div className="space-y-6">
        {faqData.map((item, index) => (
          <div className="space-y-2" key={index}>
            <div
              className="flex space-x-2 cursor-pointer"
              onClick={() => handleAccordion(index)}
            >
              {index === activeIndex ? (
                <IoIosArrowDropdownCircle className="text-3xl text-twilight" />
              ) : (
                <IoIosArrowDroprightCircle className="text-3xl text-twilight" />
              )}

              <HeadingH5>{item.question}</HeadingH5>
            </div>
            <Collapse isOpened={index === activeIndex}>
              <BodyText className="text-justify pl-1">{item.answer}</BodyText>
            </Collapse>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
