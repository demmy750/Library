import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Pagination = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-white py-2 border">
      <button
        aria-label="Previous page"
        className="flex items-center gap-2 sm:gap-4 font-semibold px-4 sm:px-8 cursor-pointer"
      >
        <FaArrowLeftLong className="text-xl sm:text-2xl" />
        <p className="text-sm sm:text-base">Prev</p>
      </button>
      <div className="flex gap-2 sm:gap-6 items-center">
        <button
          aria-label="Page 1"
          className="border px-2 sm:px-3 py-1 bg-[#518C36] text-white cursor-pointer rounded-md text-sm sm:text-base"
        >
          1
        </button>
        {/* <button
          aria-label="Page 2"
          className="text-sm sm:text-base cursor-pointer"
        >
          2
        </button> */}
        {/* <button aria-label="Page 3" className='text-sm sm:text-base cursor-pointer'>3</button>
            <p className='text-sm sm:text-base'>......</p>
            <button aria-label="Page 20" className='text-sm sm:text-base cursor-pointer'>20</button> */}
      </div>
      <button
        aria-label="Next page"
        className="flex items-center gap-2 sm:gap-4 cursor-pointer font-semibold px-4 sm:px-8"
      >
        <p className="text-sm sm:text-base">Next</p>
        <FaArrowRightLong className="text-xl sm:text-2xl" />
      </button>
    </div>
  );
};
