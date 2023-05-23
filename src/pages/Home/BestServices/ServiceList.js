import React from "react";
import ServiceCard from "./ServiceCard";
import ButtonFullOutline from "../../Shared/Buttons/ButtonFullOutline";
import ResponsiveCard from "../../Shared/ReusableComponents/ResponsiveCard";

const ServiceList = ({ services, showDetailBtn }) => {
  return (
    <>
      <ResponsiveCard>
        {services.map((data) => (
          <ServiceCard
            key={data.id}
            className="mx-auto md:mx-0"
            cardData={data}
          />
        ))}
      </ResponsiveCard>
      {showDetailBtn ? (
        <div className="mt-6">
          <ButtonFullOutline>View All Services</ButtonFullOutline>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ServiceList;
