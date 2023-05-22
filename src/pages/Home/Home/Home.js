import React from "react";
import Hero from "../Hero/Hero";
import AboutSection from "../AboutSection/AboutSection";
import BestServices from "../BestServices/BestServices";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <BestServices />
      <div className="py-96"></div>
    </div>
  );
};

export default Home;
