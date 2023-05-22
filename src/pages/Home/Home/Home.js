import React from "react";
import Hero from "../Hero/Hero";
import AboutSection from "../AboutSection/AboutSection";
import BestServices from "../BestServices/BestServices";
import TestimonialSection from "../TestimonialSection/TestimonialSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <BestServices />
      <TestimonialSection />
      {/* <div className="py-96"></div> */}
    </div>
  );
};

export default Home;
