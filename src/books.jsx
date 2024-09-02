import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebars/sidebar";
import { Filterbutton } from "./components/buttons/filterbutton";
import { Addnewbook } from "./components/buttons/addnewbook";
import { BookTable } from "./components/booklists/booktable";
import { Pagination } from "./components/Pagination";
import api from "./api/axios";

export const BookSection = () => {
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
    <div className="flex h-screen w-full bg-[whitesmoke]">
      <Sidebar className="fixed top-0 left-0 h-full w-[250px] bg-gray-800" />
      <div className="flex-1 overflow-y-auto">
        <Navbar />
        <div className="m-8 bg-white">
          <div className="flex justify-between items-center rounded-sm border shadow-md p-4">
            <p className="text-2xl font-bold ">Books</p>
            <div className="flex justify-center items-center ">
              <Filterbutton handleFilter={handleFilter} />
              <Addnewbook />
            </div>
          </div>

          <BookTable books={books} setBooks={setBooks} />
          <Pagination />
        </div>
      </div>
    </div>
  );
};
