import React from "react";

const Basket = ({ className }) => {
  return (
    <div
      className={`${className} bg-white w-full rounded border shadow-lg   pb-6  hidden lg:block lg:col-span-4`}
    >
      <div className="bg-mintfrost px-5 py-2">
        <div className="">
          <div className="pb-5 pt-3 px-2 sm:space-x-14 md:space-x-16 lg:space-x-20">
            <h3 className="text-lg font-semibold text-twilight">Your Basket</h3>
          </div>
          <hr />
        </div>

        <div className="">
          <div className="pb-3 pt-3 px-2 sm:space-x-14 md:space-x-16 lg:space-x-20">
            <h3 className="text-lg font-semibold text-twilight">
              Toyota Avensis
            </h3>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Basket;
