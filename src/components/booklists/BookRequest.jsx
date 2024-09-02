import React, { useState, useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import api from "../../api/axios";

export const BookRequest = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get(
          "https://library-management-system-hctm.onrender.com/api/requests/"
        );
        console.log(response.data.requests);
        setBooks(response.data.requests);
      } catch (error) {
        console.error("Error fetching book requests:", error);
      }
    };

    fetchBooks();
  }, []);

  const formatDate = (date) => {
    return date ? new Date(date).toLocaleDateString() : "N/A";
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-sm shadow">
        <thead className="bg-[#DFFFD0]">
          <tr>
            <th className="p-4 text-left text-[#1D2939]">Member Name</th>
            <th className="p-4 text-left text-[#1D2939]">Book Name</th>
            <th className="p-4 text-left text-[#1D2939]">Borrowed Date</th>
            <th className="p-4 text-left text-[#1D2939]">Return Date</th>
            <th className="p-4 text-left text-[#1D2939]">Status</th>
            <th className="p-4 text-left text-[#1D2939]">Action</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book) => (
            <tr key={book.id}>
              {" "}
              {/* Use a unique identifier from the book */}
              <td className="p-4 text-gray-700 whitespace-nowrap">
                {book.userName}
              </td>
              <td className="p-4 text-gray-700 whitespace-nowrap">
                {book.bookName}
              </td>
              <td className="p-4 text-gray-700 whitespace-nowrap">
                {book.status === "Approved" || book.status === "Returned"
                  ? formatDate(book.borrowedAt)
                  : "N/A"}
              </td>
              <td className="p-4 text-gray-700 whitespace-nowrap">
                {book.status === "Returned"
                  ? formatDate(book.returnedAt)
                  : "N/A"}
              </td>
              <td
                className={`${
                  book.status === "Approved"
                    ? "bg-[#ECFDF3] text-[#12B76A]"
                    : book.status === "Returned"
                    ? "bg-[#DFFFD0] text-[#4CAF50]"
                    : book.status === "Declined"
                    ? "bg-[#FFF5F8] text-[#F1416C]"
                    : "bg-[#FFF8DD] text-[#F6C000]"
                } text-center flex justify-center items-center my-4 w-fit px-4 rounded-full`}
              >
                {book.status}
              </td>
              <td>
                <BsThreeDots className="m-4 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
