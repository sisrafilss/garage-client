import PageTopHeader from "../../components/ReusableComponents/Others/PageTopHeader";
import SectionWrapper from "../../components/ReusableComponents/Others/SectionWrapper";
import ServiceList from "../Home/BestServices/ServiceList";

const services = [
  {
    id: 1,
    imgURL: "https://i.ibb.co/g4vXJ7x/service-card-img.png",
    title: "Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  },

  {
    id: 2,
    imgURL: "https://i.ibb.co/g4vXJ7x/service-card-img.png",
    title: "Diagnostics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  },
  {
    id: 3,
    imgURL: "https://i.ibb.co/g4vXJ7x/service-card-img.png",
    title: "Repairs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  },
];
const SelectService = () => {
  return (
    <SectionWrapper>
      <PageTopHeader pageName="Select Service for your Car" />
      <ServiceList
        services={services}
        className="container pb-10 sm:pb-12 md:pb-16 lg:pb-20"
      />
    </SectionWrapper>
  );
};

export default SelectService;
