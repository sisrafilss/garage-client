import React from "react";
import img1 from "../../../media/img/car-reparing-1.jpg";
import img2 from "../../../media/img/car-reparing-2.jpg";
import img3 from "../../../media/img/car-reparing-3.jpg";
import img4 from "../../../media/img/car-reparing-4.jpg";

const images = [img1, img2, img3, img4];

const AboutSection = () => {
  return (
    <div className="py-10 container sm:flex sm:space-x-8 sm:py-12 md:py-16 lg:py-20">
      <div className="hidden sm:w-1/2 sm:grid  sm:grid-cols-2 md:grid-cols-2  gap-4 md:p-4">
        {images.map((img, idx) => (
          <div className="md:shrink-0">
            <img className="w-full h-auto" src={img} alt="" key={idx} />
          </div>
        ))}
      </div>
      <div className="space-y-5 sm:w-1/2 md:p-4">
        <h4 className="text-twilight text-lg uppercase text-center underline font-medium -mb-3 sm:text-xl sm:text-left">
          About Us
        </h4>
        <h2 className="text-black font-bold text-center capitalize text-2xl sm:text-left md:text-4xl">
          Welcome to our car repairing shop
        </h2>
        <p className="text-xs  text-black md:text-sm lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="text-xs  text-black md:text-sm lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex justify-between space-x-4 ">
          <div className="ring-2 ring-honeydew px-4 py-2 my-2 flex justify-between items-center space-x-6 lg:px-6 lg:py-4 lg:space-x-8">
            <span className="text-evergreen text-xl font-semibold lg:text-2xl">
              15+
            </span>
            <span className="text-black font-semibold text-base capitalize lg:text-lg">
              Experience Member
            </span>
          </div>
          <div className="ring-2 ring-honeydew px-4 py-2 my-2 flex justify-between items-center space-x-6 lg:px-6 lg:py-4 lg:space-x-8">
            <span className="text-evergreen text-xl font-semibold lg:text-2xl">
              2K+
            </span>
            <span className="text-black font-semibold text-base capitalize lg:text-lg">
              Satisfied Clients
            </span>
          </div>
        </div>
        <div className="flex justify-center pt-2 sm:justify-start">
          <button className="btn btn-green-lg">About More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
