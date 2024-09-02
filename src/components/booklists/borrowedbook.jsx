import React, { useState, useEffect } from "react";
import api from "../../api/axios"; // Make sure this is the correct path to your axios instance
import { Pagination } from "../Pagination";

export const BorrowedBook = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get("  "); // Adjust the URL as needed
        setBooks(response.data); // Set books data to state
      } catch (err) {
        setError("Failed to fetch borrowed books"); // Handle errors
        console.error(err);
      } finally {
        setIsLoading(false); // Set loading to false once the data is fetched
      }
    };

    fetchBooks();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="w-full">
      <table className="w-full bg-white rounded-sm shadow">
        <thead className="bg-[#DFFFD0]">
          <tr>
            <th className="p-4 text-left text-[#1D2939]">Book Name</th>
            <th className="p-4 text-left text-[#1D2939]">Author</th>
            <th className="p-4 text-left text-[#1D2939]">Borrowed Date</th>
            <th className="p-4 text-left text-[#1D2939]">Return Date</th>
            <th className="p-4 text-left text-[#1D2939]">Status</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index} className="border-b last:border-none">
              <td className="p-4 text-gray-700">{book.bookName}</td>
              <td className="p-4 text-gray-700">{book.author}</td>
              <td className="p-4 text-gray-700">{book.borrowedDate}</td>
              <td className="p-4 text-gray-700">{book.returnDate}</td>
              <td className="p-4 text-gray-700">Approved</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};
export default BorrowedBook;
