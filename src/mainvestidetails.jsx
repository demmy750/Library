import React, { useState } from "react";
import Sidebar from "./components/sidebars/sidebar";
import Navbar from "./components/navbar/navbar";
import BookHistoryTable from "./components/booklists/BookHistoryTable";
import BookInfo from "./components/booklists/bookinfo";
import BookCard from "./components/booklists/bookcard";
import Synopsis from "./Synopsis";
import { Request } from "./Request";

export const Mainvestidetails = () => {
  const [tab, setTab] = useState("synopsis");
  return (
    <div className="flex h-screen">
      <Sidebar className="fixed top-0 left-0 h-full w-[250px] bg-gray-800" />
      <div className="flex-1 flex flex-col bg-[#F9FAFB] overflow-y-auto">
        <Navbar />
        <div className="p-6">
          <BookInfo />
          <BookCard />
          <div className="flex items-center justify-between mt-14  ">
            <div className="flex bg-white   border border-white rounded-md">
              <p
                onClick={() => {
                  setTab("synopsis");
                }}
                className={`text- font-bold cursor-pointer  px-10 bg-[#518C36]  py-1   border border-white rounded-md ${
                  tab === "synopsis"
                    ? "bg-[#518C36] text-white"
                    : "bg-white text-black "
                }`}
              >
                Synopsis
              </p>
              <p
                onClick={() => {
                  setTab("Request");
                }}
                className={`text- font-bold cursor-pointer  px-10  py-1  border border-white rounded-md ${
                  tab === "Request"
                    ? "bg-[#518C36] text-white"
                    : "bg-white text-black"
                }`}
              >
                {" "}
                Requests
              </p>
              <p
                onClick={() => {
                  setTab("bookHistory");
                }}
                className={`text- font-bold cursor-pointer px-10  py-1  border border-white rounded-md  ${
                  tab === "bookHistory"
                    ? "bg-[#518C36] text-white"
                    : "bg-white text-black"
                }`}
              >
                Book History{" "}
              </p>
            </div>
          </div>
          {tab === "synopsis" && <Synopsis />}
          {tab === "Request" && <Request />}
          {tab === "bookHistory" && <BookHistoryTable />}
        </div>
      </div>
    </div>
  );
};
