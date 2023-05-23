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
      <MissionAndFaq />
    </SectionWrapper>
  );
};

export default About;
