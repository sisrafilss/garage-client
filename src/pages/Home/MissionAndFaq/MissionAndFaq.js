import { useEffect, useState } from "react";
import axios from "axios";
import Mission from "./Mission";
import FAQ from "./FAQ/FAQ";

// const faqData = [
//   {
//     id: 1,
//     question: "How often should I get my car serviced?",
//     answer:
//       "It is recommended to get your car serviced every 6 months or every 5,000 miles, whichever comes first. Regular servicing helps maintain your car's performance and prevents potential issues.",
//   },
//   {
//     id: 2,
//     question: "What services do you offer at your car garage?",
//     answer:
//       "At our car garage, we offer a wide range of services including oil changes, brake inspections and repairs, tire rotations and replacements, engine diagnostics, air conditioning servicing, and more. Our skilled technicians are trained to handle various car maintenance and repair needs.",
//   },
//   {
//     id: 3,
//     question: "How long does a typical car service take?",
//     answer:
//       "The duration of a car service depends on the type of service required. Basic services like oil changes or tire rotations usually take around 30 minutes to an hour. However, more extensive services or repairs may take several hours or even a full day. Our staff can provide you with an estimated timeframe based on your specific service needs.",
//   },
// ];

const MissionAndFaq = ({ className }) => {
  const [faqData, setFaqData] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const fetchFaqData = async () => {
    const response = await axios.get("/data/faqData.json");
    setFaqData(response.data);
  };

  useEffect(() => {
    fetchFaqData();
  }, []);

  return (
    <section
      className={`container space-y-10 sm:grid sm:space-y-0 sm:grid-cols-2 sm:gap-x-6 ${className}`}
    >
      <Mission />
      <div className="ring-1 ring-[#D9D9D9]  rounded-[10px] py-4 px-4 space-y-7 shadow sm:">
        <FAQ
          handleAccordion={handleAccordion}
          activeIndex={activeIndex}
          faqData={faqData?.qna}
          title={faqData.title}
        />
      </div>
    </section>
  );
};

export default MissionAndFaq;
