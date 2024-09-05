import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Pagination } from "./components/Pagination";
import { Filterbutton } from "./components/buttons/filterbutton";
import api from "./api/axios";

export const Mainrequest = () => {
  const [books, setBooks] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
          "https://library-management-system-hctm.onrender.com/api/requests/"
        );
        console.log(response.data.requests);
        setBooks(response.data.requests);
      } catch (error) {
        // setError(error.message);
        // } finally {
        //   setLoading(false);
      }
    };

    fetchData();
  }, []);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center text-2xl font-semibold py-6 px-4 border bg-white rounded-t-md mt-10">
        <p>Request</p>
        <Filterbutton />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-sm shadow">
          <thead className="bg-[#DFFFD0]">
            <tr>
              <th className="p-4 text-left text-[#1D2939]">Member Name</th>
              <th className="p-4 text-left text-[#1D2939]">Book Name</th>
              <th className="p-4 text-left text-[#1D2939]">Borrowed Date</th>
              <th className="p-4 text-left text-[#1D2939]">Return Date</th>
              <th className="p-4 text-left text-[#1D2939]">Status</th>
              <th className="pl-8 text-left text-[#1D2939]">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((item, index) => (
              <tr key={index} className="border-b last:border-none">
                <td className="p-4 text-gray-700">{item.userName}</td>
                <td className="p-4 text-gray-700">{item.bookName}</td>
                <td className="p-4 text-gray-700">{item.borroweddate}</td>
                <td className="p-4 text-gray-700">{item.returndate}</td>
                <td
                  className={`p-4 text-center ${
                    item.status === "Approved"
                      ? "bg-[#ECFDF3] text-[#12B76A]"
                      : item.status === "Declined"
                      ? "bg-[#FFF5F8] text-[#F1416C]"
                      : item.status === "Pending"
                      ? "bg-[#FFF8DD] text-[#F6C000]"
                      : "bg-[#E7F1FF] text-[#1868DB]"
                  }
                                  flex my-4 w-fit px-4`}
                >
                  {item.status}
                </td>
                <td className="p-4 text-center">
                  <BsThreeDots className="mx-auto" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};
