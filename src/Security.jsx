import React from "react";

export const Security = () => {
  return (
    <div>
      <form className="mt-5 ">
        <div className="text-[25px] font-bold">Change Password</div>
        <div className=" flex flex-col gap-5 justify-between md:w-[460px] w-full ">
          <div>
            <label
              htmlFor="password"
              className="border-[0.1rem]  border-white rounded-md justify-center flex  w-fit text-[0.7rem] py-[0.2rem] px-[0.8rem] font-bold ml-6 relative z-100 bg-[#FCFCFD] mt-4"
            >
              OLD PASSWORD{" "}
            </label>
            <input
              className="border w-full p-[1.1rem] rounded-md  z-10  mt-[-0.8rem]"
              type="password"
              id="password"
              name="Old Password"
              placeholder="Password"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="border-[0.1rem]  border-white rounded-md justify-center flex  w-fit text-[0.7rem] py-[0.2rem] px-[0.8rem] font-bold ml-6 relative z-100 bg-[#FCFCFD]"
            >
              {" "}
              NEW PASSWORD{" "}
            </label>
            <input
              className="border w-full p-[1.1rem] rounded-md  z-10  mt-[-0.8rem]"
              type="password"
              id="password"
              name="Old Password"
              placeholder="Password"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="border-[0.1rem]  border-white rounded-md justify-center flex  w-fit text-[0.7rem] py-[0.2rem] px-[0.8rem] font-bold ml-6 relative z-100 bg-[#FCFCFD]"
            >
              CONFIRM PASSWORD{" "}
            </label>
            <input
              className="border w-full p-[1.1rem] rounded-md  z-10  mt-[-0.8rem]"
              type="password"
              id="password"
              name="Old Password"
              placeholder="Password"
            />
          </div>
          <button
            className="bg-[#518C36] mt-20  py-2 w-1/2 text-white rounded-lg "
            type="submit"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};
