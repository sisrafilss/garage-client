import React from "react";
import AboutGarage from "./AboutGarage";
import UsefulLinks from "./UsefulLinks";
import ContactInfo from "./ContactInfo";
import CopyRight from "./CopyRight";
import OfficeHours from "./OfficeHours";

const Footer = () => {
  return (
    <footer className="bg-mintfrost py-8  space-y-3 lg:pt-12">
      <div className="container space-y-8 md:space-y-0 pb-3 sm:grid sm:grid-cols-2 sm:gap-x-12 md:grid-cols-4">
        <AboutGarage />
        <UsefulLinks />
        <ContactInfo />
        <OfficeHours />
      </div>
      <hr className="border" />
      <CopyRight />
    </footer>
  );
};

export default Footer;
