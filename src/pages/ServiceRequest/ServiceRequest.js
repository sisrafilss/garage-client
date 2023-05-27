import React, { useState } from "react";
import SectionWrapper from "../Shared/ReusableComponents/SectionWrapper";
import PageTopHeader from "../Shared/ReusableComponents/PageTopHeader";
import { Link } from "react-router-dom";
import BodyText from "../Shared/ReusableComponents/BodyText";
import { BiSearch } from "react-icons/bi";
import { TbMathGreater } from "react-icons/tb";
import HeadingH5 from "../Shared/ReusableComponents/HeadingH5";
import HeadingH3 from "../Shared/ReusableComponents/HeadingH3";

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
  const [onRepainr, setOnRepair] = useState(true);

  return (
    <SectionWrapper>
      <PageTopHeader pageName="What does your car need?" />
      <div className="bg-white w-full rounded shadow-lg py-2 px-4 space-y-10 pb-6">
        {/* Top navbar */}
        <div>
          <div className="flex space-x-8  pb-2">
            <div>
              <Link className="text-lg font-semibold text-twilight">
                Servicing
              </Link>
            </div>
            <div>
              <Link className="text-lg font-semibold text-twilight">
                Diagnostics
              </Link>
            </div>
            <div className="relative">
              <Link
                className="text-lg font-semibold text-evergreen  "
                onMouseOver={() => setOnRepair(true)}
                //   onMouseLeave={() => setOnRepair(false)}
              >
                Repair
              </Link>
              {onRepainr && (
                <div className="w-20 h-1 bg-evergreen absolute top-[34px] -left-3 rounded-lg"></div>
              )}
            </div>
          </div>
          <hr />
        </div>

        {/* Search Box */}
        <div className="space-y-2">
          <BodyText className="text-evergreen text-center">
            Looking for a specific repair?
          </BodyText>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for servicing, break disc..."
              className="border-[#4c4c6d] outline-none rounded w-full h-12 pl-12 pr-2  bg-light-gray text-black placeholder:text-[#4C4C6D]"
            />
            <BiSearch className="absolute top-2 left-2 z-10 text-3xl text-black text-opacity-50 h-auto " />
          </div>
        </div>

        <div className="">
          <div className="space-y-2">
            <HeadingH3 className="text-twilight ">
              Most Popular Repairs
            </HeadingH3>
            <hr />
          </div>

          <div>
            {repairings.map((repair, idx) => (
              <div
                key={idx}
                className="space-y-4 pt-4  hover:bg-mintfrost"
              >
                <div className="flex justify-between items-center space-x-4 ">
                  <HeadingH5 className="text-twilight text-[18px] hover:text-evergreen">
                    <Link to="">{repair.title}</Link>
                  </HeadingH5>
                  <TbMathGreater className="text-xl text-twilight text-opacity-80" />
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ServiceRequest;
