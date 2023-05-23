import React from "react";
import SectionWrapper from "../Shared/ReusableComponents/SectionWrapper";
import PageTopHeader from "../Shared/ReusableComponents/PageTopHeader";
import BestServices from "../Home/BestServices/BestServices";

const Services = () => {
  return (
    <SectionWrapper>
      <PageTopHeader pageName="Services" />
      <BestServices className="pb-10 sm:pb-12 md:pb-16 lg:pb-20" showDetailBtn={false} />
    </SectionWrapper>
  );
};

export default Services;
