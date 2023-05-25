import React from "react";
import Subtitle from "../../Shared/ReusableComponents/Subtitle";
import HeadingH2 from "../../Shared/ReusableComponents/HeadingH2";
import BodyText from "../../Shared/ReusableComponents/BodyText";
import ServiceList from "./ServiceList";

const services = [
  {
    id: 1,
    imgURL: "https://i.ibb.co/g4vXJ7x/service-card-img.png",
    title: "Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  },
  {
    id: 2,
    imgURL: "https://i.ibb.co/g4vXJ7x/service-card-img.png",
    title: "Diagnostics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  },
  {
    id: 3,
    imgURL: "https://i.ibb.co/g4vXJ7x/service-card-img.png",
    title: "Repairs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  },
 
];

const BestServices = ({ className, showDetailBtn = true }) => {
  return (
    <section className={`container space-y-8 ${className}`}>
      <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5 md:space-y-6">
        <Subtitle className="text-center">best services</Subtitle>
        <HeadingH2 className="text-center">Provide our best services</HeadingH2>
        <BodyText className="mx-auto text-center max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </BodyText>
      </div>
      <ServiceList showDetailBtn={showDetailBtn} services={services} />
    </section>
  );
};

export default BestServices;
