import PageTopHeader from "../../components/ReusableComponents/Others/PageTopHeader";
import SectionWrapper from "../../components/ReusableComponents/Others/SectionWrapper";
import BestServices from "../Home/BestServices/BestServices";

const Services = () => {
  return (
    <SectionWrapper>
      <PageTopHeader pageName="Services" />
      <BestServices
        className="pb-10 sm:pb-12 md:pb-16 lg:pb-20"
        showDetailBtn={false}
      />
    </SectionWrapper>
  );
};

export default Services;
