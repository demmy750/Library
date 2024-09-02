import React, { useState, useEffect } from "react";
import api from "../../api/axios";

function BookList() {
  // const books = [
  //   { title: 'Theology of Economics', cover: '../src/assets/image 1.png' },
  //   { title: 'Half of a Yellow Sun', cover: '../src/assets/image 2.png' },
  //   { title: 'Harry Potter and the Philosopher’s Stone', cover: '../src/assets/image 3.png' },
  //   { title: 'Chemistry: A Fundamental Overview of Essential Principles', cover: '../src/assets/image 4.png' },
  // ];
  const [books, setBooks] = useState([]);
  // const [newBook, setNewBook] = useState({ title: '', cover: '' })
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
        {books.map((book) => (
          <div key={book.title} className="bg-white p-4 rounded-lg shadow">
            <img
              src={book.image}
              className="h-40 w-auto mb-2 mx-auto object-cover"
              alt=""
            />
            <p className="text-center font-bold text-[#1D2939]">{book.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
