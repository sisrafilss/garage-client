import React from "react";
import HeadingH5 from "../ReusableComponents/HeadingH5";
import BodyText from "../ReusableComponents/BodyText";

const ContactInfo = () => {
  return (
    <div className="space-y-3 md:space-y-0">
      <HeadingH5 className="text-xl font-semibold">Contact Info</HeadingH5>
      <div className="flex flex-col">
        <BodyText>
          8737 Valley Blvd, Rosemead, CA 91770, <br /> United States +123 4578
          6358 <br />
          autorepair.info@gmail.com
        </BodyText>
      </div>
    </div>
  );
};

export default ContactInfo;
