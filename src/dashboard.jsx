import React, { useState } from "react";
import BookList from "./components/booklists/booklist";
import MembersTable from "./components/members/membersTable";
import Sidebar from "./components/sidebars/sidebar";
import TopStats from "./components/TopStats/topStats";
import ChartComponent from "./components/barcharts/chartComponent";
import Navbar from "./components/navbar/navbar";
import { Filterbutton } from "./components/buttons/filterbutton";
import { Pagination } from "./components/Pagination";
import { BookRequest } from "./components/booklists/BookRequest";
import api from "./api/axios";
import { Filterbuttondashboard } from "./components/buttons/filterbuttondashboard";

export const Dashboard = () => {
  const [tab, setTab] = useState("membersList");
  const [member, setmember] = useState([]);
  const handleFilter = async () => {
    console.log("This is where my filter comes");

    // setIsLoading(true);
    try {
      const response = await api.get(
        "https://library-management-system-hctm.onrender.com/api/filter?resource=users&activity=ACTIVE&role=ADMIN"
      );
      console.log(response.data);
      setmember(response.data);
    } catch (error) {
      console.error("Failed to fetch books:", error);
      // } finally {
      //   setIsLoading(false);
    }
  };
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar className="fixed top-0 left-0 h-full w-[250px] bg-gray-800" />
      <div className="flex-1  overflow-y-auto">
        <Navbar />
        <div className="p-6 space-y-6 mt-2">
          <TopStats />
          <ChartComponent />
          <BookList />
          <div className="">
            <div className="flex justify-between border py-6 rounded-t-[8px] bg-white px-4 ">
              <div className="flex flex-col sm:flex-row items-center">
                <p
                  onClick={() => {
                    setTab("membersList");
                  }}
                  className={`text-[#667085] px-4 sm:px-8 lg:px-20 py-1 rounded-lg cursor-pointer ${
                    tab === "membersList"
                      ? "bg-[#518C36] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  Members List
                </p>
                <p
                  onClick={() => {
                    setTab("bookRequest");
                  }}
                  className={`text-[#667085] mt-2 sm:mt-0 sm:ml-4 px-4 sm:px-8 lg:px-20 py-1 rounded-lg cursor-pointer ${
                    tab === "bookRequest"
                      ? "bg-[#518C36] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  Book requests
                </p>
              </div>
              <Filterbuttondashboard handleFilter={handleFilter} />
            </div>
            {tab === "membersList" && (
              <MembersTable member={member} setmember={setmember} />
            )}
            {tab === "bookRequest" && (
              <BookRequest member={member} setmember={setmember} />
            )}

            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};
