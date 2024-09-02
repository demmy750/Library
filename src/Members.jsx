import React, { useState } from "react";
import Sidebar from "./components/sidebars/sidebar";
import Navbar from "./components/navbar/navbar";
import Membersstat from "./components/members/Membersstat";
import MembersTable from "./components/members/membersTable";
import { Filterbutton } from "./components/buttons/filterbutton";
import { Pagination } from "./components/Pagination";
import { Filterbuttonmembers } from "./components/buttons/filterbuttonmembers";
import { Filterbuttondashboard } from "./components/buttons/filterbuttondashboard";
import api from "./api/axios";

export const Members = () => {
  const [books, setBooks] = useState([]);
  const handleFilter = async () => {
    console.log("This is where my filter comes");

    // setIsLoading(true);
    try {
      const response = await api.get(
        "https://library-management-system-hctm.onrender.com/api/filter?resource=books&status=Available&author=Paulo Coelho"
      );
      console.log(response.data);
      setBooks(response.data);
    } catch (error) {
      console.error("Failed to fetch books:", error);
      // } finally {
      //   setIsLoading(false);
    }
  };
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-[#F9FAFB] overflow-y-auto">
        <Navbar />
        <div className="p-6 space-y-6 mt-2">
          <Membersstat />
          <div>
            <div className="flex justify-between items-center border rounded-t-md p-6 bg-white">
              <p className="font-bold text-[25px]">Members List</p>
              <Filterbuttondashboard handleFilter={handleFilter} />
            </div>
            <MembersTable books={books} setBooks={setBooks} />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};
