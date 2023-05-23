import React from "react";
import img1 from "../../../media/img/car-reparing-1.jpg";
import img2 from "../../../media/img/car-reparing-2.jpg";
import img3 from "../../../media/img/car-reparing-3.jpg";
import img4 from "../../../media/img/car-reparing-4.jpg";
import Subtitle from "../../Shared/ReusableComponents/Subtitle";
import HeadingH2 from "../../Shared/ReusableComponents/HeadingH2";
import BodyText from "../../Shared/ReusableComponents/BodyText";
import AttentionBox from "./AttentionBox";
import LargeGreenButton from "../../Shared/ReusableComponents/LargeGreenButton";
import { Link } from "react-router-dom";

const images = [img1, img2, img3, img4];

const AboutSection = ({className, showBtn = true }) => {
  return (
    <section className={`container sm:flex sm:space-x-8 ${className}`}>
      <div className="hidden sm:w-1/2 sm:grid  sm:grid-cols-2 md:grid-cols-2  gap-4 md:p-4">
        {images.map((img, idx) => (
          <div key={idx} className="md:shrink-0">
            <img className="w-full h-auto" src={img} alt="" />
          </div>
        ))}
      </div>
      <div className="space-y-5 sm:w-1/2 md:p-4">
        <Subtitle className="sm:text-left"> About Us</Subtitle>
        <HeadingH2 className="sm:text-left">
          Welcome to our car repairing shop
        </HeadingH2>
        <BodyText>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </BodyText>
        <BodyText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </BodyText>
        <div className="flex justify-between space-x-4 ">
          <AttentionBox info1="15+" info2="Experience Member" />
          <AttentionBox info1="2K+" info2="Satisfied Clients" />
        </div>
        {showBtn ? (
          <div className="flex justify-center pt-2 sm:justify-start">
            <LargeGreenButton>
              <Link to="/about">About More</Link>
            </LargeGreenButton>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default AboutSection;
