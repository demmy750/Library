import React, { useState, useEffect } from "react";
import { Filterbutton } from "../buttons/filterbutton";
import { Pagination } from "../Pagination";

const BookHistoryTable = () => {
  const data = [];
  // const [Membertable, setMembertable] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await api(``);
  //     try {
  //       console.log(response.data);
  //       setMemberinfo(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="mt-10 ">
      <div className="flex justify-end bg-white p-4 border rounded-t-md ">
        <div className="">
          <Filterbutton />
        </div>
      </div>
      {/* <div className="flex">
        <Link to='/Synopsis'>
       <p  className="text- font-bold cursor-pointer  px-10  rounded-lg py-1 border"> Synopsis</p>
       </Link>
        <Link to='/Request'>
        <p className="text- font-bold cursor-pointer px-10  py-1 rounded-lg border "> Request</p>
        </Link>
        <p className="text- font-bold cursor-pointer  px-10 bg-[#518C36] rounded-lg py-1 border text-white">Book History </p>
        </div> */}
      <div className="bg-white  shadow ">
        <div className="flex items-center justify-between  "></div>

        {/* <div className='flex justify-end items-end mb-4'><Filterbutton/></div> */}
        <div className="w-full table ">
          <div className="bg-[#DFFFD0] w-full  ">
            <div className="flex justify-between font-bold  py-2 ">
              <div className="px-4 pl-4 py-2 text-left">Member Name</div>
              <div className="pr-4 gap-10 flex">
                <div className="pr-10 py-2 text-left ">ISBN</div>
                <div className="px-2 py-2 text-left ">Borrow Date</div>
                <div className="px-4 py-2 text-left">Return Date</div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {data.map((row, index) => (
              <div key={index} className=" flex w-full justify-between mt-4">
                <div className="px-4 py-2">{row.memberName}</div>
                <div className="flex gap-10 pr-4">
                  <div className="px-4 py-2">{row.ISBN}</div>
                  <div className="px-4 py-2">{row.borrowDate}</div>
                  <div className="px-4 py-2">{row.returnDate}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default BookHistoryTable;
