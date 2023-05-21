import React from "react";
import heroImg from "../../../media/img/hero-img.png";

const Hero = () => {
  return (
    <div className=" bg-twilight ">
      <div className="container flex flex-col justify-between space-x-8 py-12 sm:flex-row">
        <div className="flex flex-col  justify-center items-center px-4 text-white space-y-6 sm:items-start sm:space-y-8 sm:w-7/12">
          <h1 className="text-3xl md:text-4xl xl:text-6xl">
            Highly Modified Car Repair system And Maintenance
          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
          <div className="flex justify-between w-full">
            <button className="btn btn-green-lg">Explore More</button>
            <button className="btn btn-green-lg-outline">Contact Us</button>
          </div>
        </div>
        <div className="shrink-0  sm:w-5/12">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
