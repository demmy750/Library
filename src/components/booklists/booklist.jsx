import React, { useState, useEffect } from "react";
import api from "../../api/axios";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
          "https://library-management-system-hctm.onrender.com/api/books/top-choices"
        );
        console.log(response.data);
        setBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Top Choices</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.slice(0, 4).map((book) => (
          <div key={book.title} className="bg-white p-4 rounded-lg shadow">
            <img
              src={book.image}
              className="h-40 w-auto mb-2 mx-auto object-cover"
              alt={book.title}
            />
            <p className="text-center font-bold text-[#1D2939]">{book.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
