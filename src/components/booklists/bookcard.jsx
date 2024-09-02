import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import api from "../../api/axios";

const BookCard = () => {
  const { id } = useParams(); // Get the ID from URL parameters
  const [book, setBook] = useState(null); // Initialize state for a single book
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await api.get(
          `https://library-management-system-hctm.onrender.com/api/books/${id}`
        );
        console.log(response.data);
        setBook(response.data); // Set book data to state
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  // if (!book) return <div>No book data available.</div>;

  return (
    <div className="p-8 mt-2 border rounded-lg shadow-md bg-white">
      <div className="grid md:grid-cols-8 gap-5">
        <div className="col-span-2 relative bg-red-500">
          <img src={book.image} alt="" className="object-cover w-full" />
        </div>
        <div className="md:col-span-4">
          <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col justify-between">
              <div className="flex mb-20">
                <p className="text-[#667085] mb-2 border-r pr-4">
                  {book.author}
                </p>
                <p className="text-[#667085] mb-2 border-r px-4">
                  Historical fiction
                </p>
                <div className="ml-2 flex items-center -mt-2 gap-2">
                  <img
                    className="w-4"
                    src="/src/assets/star (1).svg"
                    alt="star"
                  />
                  <div>50</div>
                </div>
              </div>
              <div className="flex flex-col space-y-6 ">
                <div className="mb-2 flex w-full justify-end">
                  <p className="font-semibold w-full">Available format</p>
                  <p className="text-gray-500 w-full">{book.availability}</p>
                </div>
                <div className="w-full mb-2 flex justify-end">
                  <p className="font-semibold w-full">Status</p>
                  <p className="text-gray-500 w-full">Available</p>
                </div>
                <div className="w-full mb-2 flex  justify-end">
                  <p className="font-semibold w-full">Amount in stock</p>
                  <p className="text-gray-500 w-full">{book.quantity}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="flex flex-col h-full gap-4 justify-between">
            <div className="border rounded-lg flex-1 flex flex-col m-auto w-full items-center justify-center">
              <p className="text-[#667085] text-center">Pages</p>
              <p className="font-bold text-center">{book.pages}</p>
            </div>
            <div className="border rounded-lg flex-1 flex flex-col m-auto w-full items-center justify-center">
              <p className="text-[#667085]">Language</p>
              <p className="font-bold">English</p>
            </div>
            <div className="border rounded-lg flex-1 flex flex-col m-auto w-full items-center justify-center">
              <p className="text-[#667085]">ISBN</p>
              <p className="font-bold">{book.isbn}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
