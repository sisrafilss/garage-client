import ButtonFullOutline from "../../../components/ReusableComponents/Buttons/ButtonFullOutline";
import ResponsiveCard from "../../../components/ReusableComponents/Others/ResponsiveCard";
import ServiceCard from "./ServiceCard";

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
