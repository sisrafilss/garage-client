import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from "react-icons/bi";
import { TbMathGreater } from "react-icons/tb";
import BodyText from '../Shared/ReusableComponents/BodyText';
import HeadingH3 from '../Shared/ReusableComponents/HeadingH3';
import HeadingH5 from '../Shared/ReusableComponents/HeadingH5';

const FeatureList = ({className, repairings}) => {
    const [onRepainr, setOnRepair] = useState(true);

    return (
        <div className={`${className} bg-white w-full rounded border shadow-lg   space-y-10 pb-6 lg:col-span-8`}>
          {/* Navigation */}
          <div className="pt-2 px-5">
            <div className="flex space-x-8  pb-5 pt-3 px-2 sm:space-x-14 md:space-x-16 lg:space-x-20">
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

          {/* Search Box */}
          <div className="space-y-2 px-5">
            <BodyText className="text-evergreen text-center">
              Looking for a specific repair?
            </BodyText>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for servicing, break disc..."
                className="border-[#4c4c6d] outline-none rounded w-full h-12 pl-12 pr-2  bg-light-gray text-black placeholder:text-[#4C4C6D]"
              />
              <BiSearch className="absolute top-2 left-2 z-10 text-3xl text-black text-opacity-50 h-auto " />
            </div>
          </div>

          {/* Repair List */}
          <div className="pb-8">
            <div className="space-y-2">
              <HeadingH3 className="text-twilight px-5">
                Most Popular Repairs
              </HeadingH3>
              <hr />
            </div>

            <div className='pb-2'>
              {repairings.map((repair, idx) => (
                <div key={idx}>
                  <Link to="">
                    <div className="space-y-4 pt-4 px-5 group hover:bg-mintfrost">
                      <div className="flex justify-between items-center space-x-4 ">
                        <HeadingH5 className="text-twilight text-[18px] group-hover:text-evergreen">
                          {repair.title}
                        </HeadingH5>
                        <TbMathGreater className="text-xl text-twilight text-opacity-80" />
                      </div>
                      <hr />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
    );
};

export default FeatureList;