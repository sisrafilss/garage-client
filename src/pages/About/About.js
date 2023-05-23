import React from "react";
import PageTopHeader from "../Shared/ReusableComponents/PageTopHeader";
import AboutSection from "../Home/AboutSection/AboutSection";
import MissionAndFaq from "../Home/MissionAndFaq/MissionAndFaq";
import SectionWrapper from "../Shared/ReusableComponents/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper>
      <PageTopHeader pageName="About Us" />
      <AboutSection showBtn={false} />
      <MissionAndFaq className="pb-10 sm:pb-12 md:pb-16 lg:pb-20" />
    </SectionWrapper>
  );
};

export default About;
