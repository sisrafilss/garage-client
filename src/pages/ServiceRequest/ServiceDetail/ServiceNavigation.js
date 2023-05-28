import React, { useState } from "react";
import { Link } from "react-router-dom";

const ServiceNavigation = () => {
  const [onRepainr, setOnRepair] = useState(true);
  return (
    <>
      <div className="">
        <div className="flex space-x-8  pb-5 pt-5 px-5 sm:space-x-14 md:space-x-16 lg:space-x-20">
          <div>
            <Link className="text-lg font-semibold text-twilight">
              Servicing
            </Link>
          </div>
          <div>
            <Link className="text-lg font-semibold text-twilight">
              Diagnostics
            </Link>
          </div>
          <div className="relative">
            <Link
              className="text-lg font-semibold text-evergreen  "
              onMouseOver={() => setOnRepair(true)}
              //   onMouseLeave={() => setOnRepair(false)}
            >
              Repair
            </Link>
            {onRepainr && (
              <div className="w-20 h-1 bg-evergreen absolute top-[46px] -left-3 rounded-lg"></div>
            )}
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default ServiceNavigation;
