import Subtitle from "../../../../components/ReusableComponents/Others/Subtitle";
import FAQBody from "./FAQBody";


const FAQ = ({ faqData, activeIndex, handleAccordion, title }) => {
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
