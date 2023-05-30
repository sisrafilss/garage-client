const OrderSteps = ({ activeStep }) => {
  return (
    <div className="container flex justify-around">
      <Step
        stepName="Add Service"
        step="1"
        className="-mr-0"
        isActive={activeStep === "1" ? true : false}
      />
      <Separator />
      <Step
        stepName="Date &amp; Time"
        step="2"
        className="-mx-0"
        isActive={activeStep === "2" ? true : false}
      />
      <Separator />
      <Step
        stepName="Confirm Details"
        step="3"
        className="-ml-1"
        isActive={activeStep === "3" ? true : false}
      />
    </div>
  );
};

export default OrderSteps;

const Step = ({ step, stepName, className, isActive }) => {
  return (
    <div
      className={`flex justify-center items-center flex-col space-y-1 ${className}`}
    >
      <div
        className={`${
          isActive
            ? "bg-evergreen"
            : "bg-mintfrost border border-black border-opacity-10"
        } w-[60px] h-[60px] rounded-full flex justify-center items-center sm:w-[60px] sm:h-[60px]`}
      >
        <div
          className={` font-semibold ${
            isActive ? "text-white" : "text-twilight"
          }`}
        >
          {step}
        </div>
      </div>
      <div
        className={`${
          isActive ? "text-evergreen" : "text-twilight"
        } text-lg  font-semibold text-center leading-tight`}
      >
        {stepName}
      </div>
    </div>
  );
};

const Separator = () => {
  return <div className="h-[1px] w-full bg-twilight bg-opacity-75 mt-7"></div>;
};
