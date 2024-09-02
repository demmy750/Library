import React from "react";
import { Button1 } from "./components/buttons/Button1";
import Bookreel from "../src/assets/Book reel.png";
import vestilogo from "../src/assets/Vestilogo.png";

export const Resetpassword = () => {
  return (
    <div className="h-[100vh] flex overflow-y-hidden justify-center items-center xl:gap-20 xxl:gap-40 gap-20">
      <img
        src={Bookreel}
        className="w-[80%] xl:w-[100%] h-full hidden lg:block"
        alt="Book reel"
      />
      <div className="w-full ml-4 mr-2 items-center flex flex-col lg:items-start">
        <div>
          <img src={vestilogo} alt="Vesti Logo" />
        </div>
        <h1 className="font-bold text-[1.8rem] mt-[2rem]">Reset Password</h1>
        <h2 className="mt-[0.5rem] font-medium text-[#667085] text-center md:text-start">
          Please enter a new password{" "}
        </h2>
        <form className="mt-[2rem]">
          <label
            htmlFor="email"
            className="border-[0.1rem] border-white rounded-md justify-center flex w-fit text-[0.7rem] py-[0.2rem] px-[0.8rem] font-bold ml-6 relative z-100 bg-[#FCFCFD]"
          >
            NEW PASWORD *
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border lg:w-[30rem] xs:w-[20rem] w-full p-[1.1rem] mt-[-0.8rem] rounded-md z-10"
          />
          <label
            htmlFor="password"
            className="border-[0.1rem] border-white rounded-md justify-center flex w-fit text-[0.7rem] py-[0.25rem] px-[0.8rem] font-bold ml-6 mt-[1.5rem] relative z-100 bg-[#FCFCFD]"
          >
            CONFIRM PASSWORD *
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border lg:w-[30rem] xs:w-[20rem] w-full p-[1.1rem] mt-[-0.8rem] rounded-md z-10"
          />
          <div className="mt-4"></div>
          <div className="flex justify-end font-bold lg:w-[30rem] w-full"></div>
          <Button1
            type="submit"
            style="bg-[#518C36] lg:w-[30rem] sm:mr:0 w-full mt-9 py-2 text-white rounded-[0.5rem]"
            title="Confirm"
          />
        </form>
      </div>
    </div>
  );
};
