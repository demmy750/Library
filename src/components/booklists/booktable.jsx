import React, { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";
import Actionmodal from "./actionmodal";

export const BookTable = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 5; // Number of books per page
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [mybookId, setmyBookId] = useState();

  useEffect(() => {
    fetchBooks(currentPage);
  }, [currentPage]);

  const fetchBooks = async (page) => {
    try {
      const response = await api.get(
        `https://library-management-system-hctm.onrender.com/api/books/?limit=${limit}&page=${page}`
      );
      // const data = await response.json();
      setBooks(response.data.books);
      // setBooks(data.books);
      setTotalPages(response.data.pagination.totalPages);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const Action = (id) => {
    setmyBookId(id);
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-[#DFFFD0] border-b border-gray-200">
            <tr>
              <th className="p-2 text-left">Book Name</th>
              <th className="p-2 text-left">Category</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Availability</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {books?.map((book, index) => (
              <tr key={index} className="border-b border-gray-200 relative">
                <td
                  className="p-2 flex items-center gap-4 cursor-pointer"
                  onClick={() => navigate(`/vesti/${book._id}`)}
                >
                  <img
                    src={book.image}
                    alt=""
                    className="w-16 h-24 object-cover"
                  />
                  <div>
                    <div className="font-bold text-sm sm:text-base">
                      {book.title}
                    </div>
                    <div className="text-gray-600 text-xs sm:text-sm">
                      {book.author}
                    </div>
                    <div className="text-gray-600 text-xs sm:text-sm">
                      {book.year}
                    </div>
                  </div>
                </td>
                <td className="p-2">{book.category}</td>
                <td className="p-2">
                  {book.quantity < 1 ? "Out of stock" : "Available"}
                </td>
                <td className="p-2">Hard copy</td>
                <td className="p-2 text-right">
                  <BsThreeDots
                    className="text-lg sm:text-xl cursor-pointer"
                    onClick={() => {
                      Action(book._id);
                    }}
                  />

                  {showModal && mybookId == book._id ? <Actionmodal /> : <></>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center py-4  px-3">
        <div
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 flex gap-4 cursor-pointer rounded-md hover:text-[green]"
        >
          <FaArrowLeftLong className="text-xl sm:text-2xl" />
          Previous
        </div>
        <div>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-1 rounded-md ${
                currentPage === index + 1
                  ? "bg-[green] text-white"
                  : "bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 flex gap-4 cursor-pointer text- rounded-md hover:text-[green] "
        >
          Next
          <FaArrowRightLong className="text-xl sm:text-2xl" />
        </button>
      </div>
    </>
  );
};
