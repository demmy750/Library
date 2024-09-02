import React, { useState, useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Filterbutton } from "../buttons/filterbutton";
import { Pagination } from "../Pagination";
import api from "../../api/axios";

export const Specialrequest = () => {
  const [Special, setSpecial] = useState([]);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await api.get(
          "https://library-management-system-hctm.onrender.com/api/requests/special-requests"
        );
        console.log(response.data.requests);
        setSpecial(response.data.requests);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRequest();
  }, []);

  return (
    <div className="overflow-x-auto ">
      <div className="flex justify-between items-center text-2xl font-semibold pr-10 py-6 px-4 border bg-white rounded-t-md mt-10">
        <p>Request</p>
        <Filterbutton />
      </div>
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
          {Special.map((request, index) => (
            <tr key={index} className="border-b last:border-none mt-4">
              <td className="p-4 text-gray-700">{request.name}</td>
              <td className="p-4 text-gray-700">{request.bookName}</td>
              <td className="p-4 text-gray-700">{request.borrowedDate}</td>
              <td className="p-4 text-gray-700">{request.returnDate}</td>
              <td className="text-center flex my-7 w-fit px-4 bg-[#F9FAFB]">
                {request.status}
              </td>
              <td>
                <BsThreeDots className="m-7" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};
