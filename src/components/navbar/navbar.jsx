import React from "react";
import { CiBellOn, CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import avatar from "../../assets/Avatar 1.png";

function Navbar() {
  return (
    <div className="    p-4  flex justify-between  bg-[#FCFCFD] border-b  shadow-sm">
      <div className="flex items-center w-full max-w-lg ">
        <FiMenu className="h-6 w-6 md:hidden mr-4 cursor-pointer" />
        <div id="search" className="relative flex-1 ml-4">
          <CiSearch className="absolute left-3  top-2.5 w-5 h-5 text-[#667085]" />
          <input
            type="search"
            className="p-2 pl-10 w-full border rounded-md"
            placeholder="Search for books, members etc..."
          />
        </div>
      </div>
      <div className="flex items-center ml-4">
        <CiBellOn className="h-8 w-8 font-bold cursor-pointer" />
        <div className="flex items-center  ml-4">
          <img
            className="h-10 w-10 rounded-full cursor-pointer"
            src={avatar}
            alt="User Avatar"
          />
          <p className="font-bold ml-2 text-[1rem] hidden md:block  mr-6">
            Ovie Victor
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
