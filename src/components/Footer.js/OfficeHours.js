import HeadingH5 from "../ReusableComponents/Headings/HeadingH5";

const OfficeHours = () => {
  return (
    <div className="space-y-3 md:space-y-3">
      <HeadingH5 className="text-xl font-semibold">Opening Hours</HeadingH5>
      <div className="text-black text-sm lg:text-base flex flex-col">
        <div className="space-y-2">
          <div>
            <strong>Monday - Friday:</strong> 8:30am - 6:30pm
          </div>
          <div>
            <strong>Satarday:</strong> 8:30am - 6:30pm
          </div>
          <div>
            <strong>Sunday:</strong> 8:30am - 6:30pm
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeHours;
