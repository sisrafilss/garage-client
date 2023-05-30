import PageTopHeader from "../../components/ReusableComponents/Others/PageTopHeader";
import SectionWrapper from "../../components/ReusableComponents/Others/SectionWrapper";
import AboutSection from "../Home/AboutSection/AboutSection";
import MissionAndFaq from "../Home/MissionAndFaq/MissionAndFaq";


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
