import React from "react";
import ServiceCard from "./ServiceCard";
import ButtonFullOutline from "../../Shared/Buttons/ButtonFullOutline";
import ResponsiveCard from "../../Shared/ReusableComponents/ResponsiveCard";

const ServiceList = ({ services, showDetailBtn, className }) => {
  return (
    <div className={`${className}`}>
      <ResponsiveCard>
        {services.map((data) => (
          <ServiceCard
            key={data.id}
            className="mx-auto md:mx-0"
            cardData={data}
            path="/select-service/repairs"
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
    </div>
  );
};

export default ServiceList;
