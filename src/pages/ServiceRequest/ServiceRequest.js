import React, { useState } from "react";
import SectionWrapper from "../Shared/ReusableComponents/SectionWrapper";
import PageTopHeader from "../Shared/ReusableComponents/PageTopHeader";
import { Link } from "react-router-dom";
import BodyText from "../Shared/ReusableComponents/BodyText";
import { BiSearch } from "react-icons/bi";
import { TbMathGreater } from "react-icons/tb";
import HeadingH5 from "../Shared/ReusableComponents/HeadingH5";
import HeadingH3 from "../Shared/ReusableComponents/HeadingH3";
import FeatureList from "./FeatureList";
import Basket from "./Basket";

const repairings = [
  {
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
      <div className="container lg:grid lg:grid-cols-12 lg:gap-4">
        <FeatureList repairings={repairings} />
        <Basket />
      </div>
    </SectionWrapper>
  );
};

export default ServiceRequest;
