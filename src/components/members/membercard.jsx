import React, { useState, useEffect } from "react";
import profilepics from "../../assets/Frame 1618868669.svg";
import api from "../../api/axios";
import { useParams } from "react-router-dom";

export const Membercard = () => {
  const { id } = useParams();
  const [Memberinfo, setMemberinfo] = useState([]);
  console.log(Memberinfo);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api(
        `https://library-management-system-hctm.onrender.com/api/auth/${id}`
      );
      try {
        console.log(response.data);
        setMemberinfo(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items mt-10 gap-6">
      {/* {Memberinfo?.map((Memberinfo, index) => ( */}
      <div
        // key={index}
        className="flex  border p-8 rounded-md bg-white "
      >
        <div>
          <img src={profilepics} className="w-52" alt="Profile" />
        </div>
        <div className="flex flex-col gap-6 justify-center ml-20 w-full">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl">{Memberinfo?.name}</h1>
            <h3 className="font-extralight">ID: {Memberinfo?._id}</h3>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between w-full">
              <h1 className="font-bold text-xl">Address</h1>
              <div>{Memberinfo?.houseAddress}</div>
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Date of Birth</h1>
              <div>{Memberinfo?.dateOfBirth}</div>
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Phone Number</h1>
              <div>{Memberinfo?.phoneNumber}</div>
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Email</h1>
              <div>{Memberinfo?.email}</div>
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Number of books borrowed</h1>
              <div>{Memberinfo?.numberOfBooksBorrowed}</div>
            </div>
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};
