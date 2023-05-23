import React from "react";
import Hero from "../Hero/Hero";
import AboutSection from "../AboutSection/AboutSection";
import BestServices from "../BestServices/BestServices";
import TestimonialSection from "../TestimonialSection/TestimonialSection";
import MissionAndFaq from "../MissionAndFaq/MissionAndFaq";
import BlogSection from "../BlogSection/BlogSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <BestServices />
      <TestimonialSection />
      <MissionAndFaq />
      <BlogSection />
      <div className="py-96"></div>
    </div>
  );
};

export default Home;
