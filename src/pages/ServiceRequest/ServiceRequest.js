import React from "react";
import SectionWrapper from "../Shared/ReusableComponents/SectionWrapper";
import PageTopHeader from "../Shared/ReusableComponents/PageTopHeader";
import FeatureList from "./FeatureList";
import Basket from "./Basket";
import ColsWrapper from "../../components/ResponsiveLayout/ColsWrapper";
import FeatureContainer from "../../components/ResponsiveLayout/FeatureContainer";
import BasketContainer from "../../components/ResponsiveLayout/BasketContainer";

export const repairings = [
  {
    id: 1,
    title: "Brake discs and pads replacement (front) ",
    price: 259.49,
    discountPrice: 219.49,
    features: [
      {
        para: "",
        points: [
          "Remove Front Brake Discs and Pads",
          "Replace with new Brake Discs and Pads",
          "Check the working order of the brake system",
        ],
      },
      {
        para: "Modern vehicles sometimes require sensors to be replaced alongside the brake pads. We will always contact you in advance should your vehicle require a new sensor.",
        points: [
          "No additional work without your approval, ",
          "We only use manufacturer parts or equivalent",
          "All parts and labour are protected with our Fixter 12-month warranty",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Brake discs and pads replacement (front) 2",
    price: 259.49,
    discountPrice: 219.49,
    features: [
      {
        para: "",
        points: [
          "Remove Front Brake Discs and Pads",
          "Replace with new Brake Discs and Pads",
          "Check the working order of the brake system",
        ],
      },
      {
        para: "Modern vehicles sometimes require sensors to be replaced alongside the brake pads. We will always contact you in advance should your vehicle require a new sensor.",
        points: [
          "No additional work without your approval, ",
          "We only use manufacturer parts or equivalent",
          "All parts and labour are protected with our Fixter 12-month warranty",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Brake discs and pads replacement (front) 3",
    price: 259.49,
    discountPrice: 219.49,
    features: [
      {
        para: "",
        points: [
          "Remove Front Brake Discs and Pads",
          "Replace with new Brake Discs and Pads",
          "Check the working order of the brake system",
        ],
      },
      {
        para: "Modern vehicles sometimes require sensors to be replaced alongside the brake pads. We will always contact you in advance should your vehicle require a new sensor.",
        points: [
          "No additional work without your approval, ",
          "We only use manufacturer parts or equivalent",
          "All parts and labour are protected with our Fixter 12-month warranty",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Brake discs and pads replacement (front)",
    price: 259.49,
    discountPrice: 219.49,
    features: [
      {
        para: "",
        points: [
          "Remove Front Brake Discs and Pads",
          "Replace with new Brake Discs and Pads",
          "Check the working order of the brake system",
        ],
      },
      {
        para: "Modern vehicles sometimes require sensors to be replaced alongside the brake pads. We will always contact you in advance should your vehicle require a new sensor.",
        points: [
          "No additional work without your approval, ",
          "We only use manufacturer parts or equivalent",
          "All parts and labour are protected with our Fixter 12-month warranty",
        ],
      },
    ],
  },
];

const ServiceRequest = () => {
  return (
    <SectionWrapper className="mb-12">
      <PageTopHeader pageName="What does your car need?" />
      <ColsWrapper>
        <FeatureContainer>
          <FeatureList className="h-full" repairings={repairings} />
        </FeatureContainer>
        <BasketContainer>
          <Basket className="h-auto" />
        </BasketContainer>
      </ColsWrapper>
    </SectionWrapper>
  );
};

export default ServiceRequest;