import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebars/sidebar";
import { MemberAccount } from "./MemberAccount";
import { Notification } from "./Notification";
import { Security } from "./Security";

export const MemberSettings = () => {
  const [tab, setTab] = useState("Account");
  return (
    <div className="flex h-screen">
      <Sidebar className="fixed top-0 left-0 h-full w-[250px] bg-gray-800" />
      <div className="flex-1 flex flex-col bg-[#F9FAFB] overflow-y-auto">
        <Navbar />
        <div className="p-8">
          <div className="flex flex-col  items-center md:items-start">
            <h1 className="text-[30px] font-bold">Settings</h1>
            <div className="flex flex-col md:flex-row  bg-white border  w-fit   mt-5">
              <p
                onClick={() => {
                  setTab("Account");
                }}
                className={`text- font-bold cursor-pointer rounded-md border-white px-10 bg-[#518C36]  py-1   border ${
                  tab === "Account"
                    ? "bg-[#518C36] text-white"
                    : "bg-white text-black "
                }`}
              >
                Account
              </p>
              <p
                onClick={() => {
                  setTab("Notification");
                }}
                className={`text- font-bold cursor-pointer  px-10 rounded-md border-white  py-1 border ${
                  tab === "Notification"
                    ? "bg-[#518C36] text-white"
                    : "bg-white text-black"
                }`}
              >
                {" "}
                Notification
              </p>
              <p
                onClick={() => {
                  setTab("Security");
                }}
                className={`text- font-bold cursor-pointer rounded-md px-10  py-1 border border-white ${
                  tab === "Security"
                    ? "bg-[#518C36] text-white"
                    : "bg-white text-black"
                }`}
              >
                Security{" "}
              </p>
            </div>
          </div>
          {tab === "Account" && <MemberAccount />}
          {tab === "Notification" && <Notification />}
          {tab === "Security" && <Security />}
        </div>
      </div>
    </div>
  );
};
