import React from "react";
import ServiceCard from "./ServiceCard";
import ButtonFullOutline from "../../Shared/Buttons/ButtonFullOutline";

const ServiceList = ({ services }) => {
  return (
    <>
      <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-4">
        {services.map((data) => (
          <ServiceCard
            key={data.id}
            className="mx-auto md:mx-0"
            cardData={data}
          />
        ))}
      </div>
      <div className="mt-6">
        <ButtonFullOutline>View All Services</ButtonFullOutline>
      </div>
    </>
  );
};

export default ServiceList;
