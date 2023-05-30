import {
  IoIosArrowDropdownCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Collapse } from "react-collapse";
import HeadingH5 from "../../../../components/ReusableComponents/Headings/HeadingH5";
import BodyText from "../../../../components/ReusableComponents/Others/BodyText";   


const FAQBody = ({ faqData, activeIndex, handleAccordion }) => {
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
