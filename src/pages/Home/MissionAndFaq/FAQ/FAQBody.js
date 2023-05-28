import React from 'react';
import {
    IoIosArrowDropdownCircle,
    IoIosArrowDroprightCircle,
  } from "react-icons/io";
import HeadingH5 from '../../../Shared/ReusableComponents/HeadingH5';
import { Collapse } from 'react-collapse';
import BodyText from '../../../Shared/ReusableComponents/BodyText';

const FAQBody = ({faqData, activeIndex, handleAccordion,}) => {
    console.log("from faq body:",faqData)
    return (
        <div className="space-y-6">
        {faqData?.map((item, index) => (
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
    );
};

export default FAQBody;