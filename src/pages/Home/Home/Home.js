import React from "react";
import Hero from "../Hero/Hero";
import AboutSection from "../AboutSection/AboutSection";
import BestServices from "../BestServices/BestServices";
import TestimonialSection from "../TestimonialSection/TestimonialSection";
import MissionAndFaq from "../MissionAndFaq/MissionAndFaq";
import BlogSection from "../BlogSection/BlogSection";

const Home = () => {
  return (
    <div className="space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-20">
      <Hero />
      <AboutSection />
      <BestServices />
      <TestimonialSection />
      <MissionAndFaq />
      <BlogSection />
    </div>
  );
};

export default Home;
