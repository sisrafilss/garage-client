import React from "react";
import HeadingH3 from "../Shared/ReusableComponents/HeadingH3";

const Basket = ({ className }) => {
  return (
    <div
      className={`${className} bg-white w-full rounded border shadow-lg   pb-6 `}
    >
      <div className="bg-mintfrost ">
        <div className="px-5 pt-2">
          <div className="pb-5 pt-3 px-2 sm:space-x-14 md:space-x-16 lg:space-x-20">
            <h3 className="text-lg font-semibold text-twilight">Your Basket</h3>
          </div>
        </div>
        <hr />

        <div className="px-5 pt-2">
          <div className="pb-3 pt-3 px-2 sm:space-x-14 md:space-x-16 lg:space-x-20">
            <h3 className="text-lg font-semibold text-twilight">
              Toyota Avensis
            </h3>
          </div>
        </div>
        <hr />
      </div>

      <hr className="mt-8" />

      <div className="px-5 pt-4 pb-4">
        <HeadingH3>TOTAL (Inc. VAT)</HeadingH3>
      </div>
    </div>
  );
};

export default Basket;


/*

I have a html structure using tailwind css like below -

<div class="grid grid-cols-12">
  <div class="col-span-8">Box 1</div>
  <div class="col-span-4">Box 2</div>
</div>

The height of the two boxes are the same because of grid. But I don't want that.
I want the second box's height should be fit with it's content. How to achive that?

*/