import React from "react";
import HeadingH3 from "../Shared/ReusableComponents/HeadingH3";

const Basket = ({ className, basketItems, totalPrice }) => {
  

  return (
    <div
      className={`${className} bg-white w-full rounded border shadow-lg   pb-6 `}
    >
      <div
        className={
          basketItems && basketItems.length > 0
            ? "bg-evergreen"
            : "bg-mintfrost"
        }
      >
        <div className="px-3 pt-2">
          <div className="pb-5 pt-3 px-2 sm:space-x-14 md:space-x-16 lg:space-x-20">
            <h3
              className={`text-lg font-semibold ${
                basketItems && basketItems.length > 0
                  ? "text-white"
                  : "text-twilight"
              }`}
            >
              Your Basket
            </h3>
          </div>
        </div>
        <hr />

        <div className="px-3 pt-2 bg-mintfrost">
          <div className="pb-3 pt-3 px-2 sm:space-x-14 md:space-x-16 lg:space-x-20">
            <h3 className="text-lg font-semibold text-twilight">
              Toyota Avensis
            </h3>
          </div>
        </div>
        <hr />
      </div>

      {basketItems !== undefined ? (
        <div className="px-3 pt-2">
          {basketItems.map((item, idx) => (
            <div key={idx} className="pb-3 pt-3 px-2">
              <div className="flex justify-between items-center">
                <span className="text-base text-twilight">{item.title}</span>
                <span className="text-[20px]  text-twilight">
                  ${item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}

      <hr className={basketItems && basketItems.length > 0 ? "mt-2" : "mt-8"} />

      <div className="px-5 pt-4 pb-4">
        <div className="flex justify-between items-center">
          <HeadingH3>TOTAL (Inc. VAT)</HeadingH3>
          <HeadingH3>${totalPrice}</HeadingH3>
        </div>
      </div>
    </div>
  );
};

export default Basket;
