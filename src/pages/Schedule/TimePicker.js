import { useState } from "react";

const availabeTimes = [
  "9:30 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM -  01:00 PM",
  "01:00 PM - 02:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
  "04:00 PM - 05:00 PM",
  "05:00 PM - 06:00 PM",
  "06:00 PM - 07:00 PM",
];

const TimePicker = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="grid grid-cols-1 gap-y-3  sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-4">
      {availabeTimes.map((time, idx) => (
        <div
          onClick={() => setActiveIndex(idx)}
          className={`border border-twilight text-center rounded px-4 py-2 cursor-pointer duration-300 hover:bg-evergreen hover:text-white ${
            activeIndex === idx ? "bg-evergreen text-white" : ""
          }`}
          key={idx}
        >
          {time}
        </div>
      ))}
    </div>
  );
};

export default TimePicker;
