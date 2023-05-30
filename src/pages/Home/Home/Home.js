import SectionWrapper from "../../../components/ReusableComponents/Others/SectionWrapper";
import Hero from "../Hero/Hero";
import AboutSection from "../AboutSection/AboutSection";
import BestServices from "../BestServices/BestServices";
import TestimonialSection from "../TestimonialSection/TestimonialSection";
import MissionAndFaq from "../MissionAndFaq/MissionAndFaq";
import BlogSection from "../BlogSection/BlogSection";

const Home = () => {
  return (
    <SectionWrapper>
      <Hero />
      <AboutSection />
      <BestServices />
      <TestimonialSection />
      <MissionAndFaq />
      <BlogSection className="pb-10 sm:pb-12 md:pb-16 lg:pb-20" />
    </SectionWrapper>
  );
};

export default Home;
