import React from "react";
import Section from "../../Shared/ReusableComponents/Section";
import Subtitle from "../../Shared/ReusableComponents/Subtitle";
import HeadingH2 from "../../Shared/ReusableComponents/HeadingH2";
import BodyText from "../../Shared/ReusableComponents/BodyText";
import ServiceCard from "./ServiceCard";
import ButtonFullOutline from "../../Shared/Buttons/ButtonFullOutline";

const services = [
  {
    id: 1,
    imgURL: "https://i.ibb.co/g4vXJ7x/service-card-img.png",
    title: "Engine Repair",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  },
  {
    id: 2,
    imgURL: "https://i.ibb.co/g4vXJ7x/service-card-img.png",
    title: "Engine Repair",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  },
  {
    id: 3,
    imgURL: "https://i.ibb.co/g4vXJ7x/service-card-img.png",
    title: "Engine Repair",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  },
  {
    id: 4,
    imgURL: "https://i.ibb.co/g4vXJ7x/service-card-img.png",
    title: "Engine Repair",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  },
  {
    id: 5,
    imgURL: "https://i.ibb.co/g4vXJ7x/service-card-img.png",
    title: "Engine Repair",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  },
  {
    id: 6,
    imgURL: "https://i.ibb.co/g4vXJ7x/service-card-img.png",
    title: "Engine Repair",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  },
];

const BestServices = () => {
  return (
    <Section className="container space-y-8">
      <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5 md:space-y-6">
        <Subtitle className="text-center">best services</Subtitle>
        <HeadingH2 className="text-center">Provide our best services</HeadingH2>
        <BodyText className="text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </BodyText>
      </div>
      <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-4">
        {services.map((data) => (
          <ServiceCard key={data.id} className="mx-auto md:mx-0" cardData={data} />
        ))}

       
      </div>
      <div className="mt-6">
            <ButtonFullOutline>View All Services</ButtonFullOutline>
        </div>
    </Section>
  );
};

export default BestServices;
