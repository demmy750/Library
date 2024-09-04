import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
// import { PiPencilLine } from "react-icons/pi";
// import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Circle from "../../assets/close-circle.svg";
import { Membercard } from "./membercard";

export const Memberinfo = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState("");

  const handleBlockMember = async () => {
    try {
      const response = await fetch(
        `https://library-management-system-hctm.onrender.com/api/auth/669f9e269c16ccf697c6711e/block`,
        { method: "PUT" }
      );

      if (!response.ok) {
        throw new Error("Failed to block member");
      }

      const data = await response.json();
      setMessage("Member successfully blocked!");
    } catch (error) {
      setMessage("Error blocking member. Please try again.");
      console.error("Error blocking member", error);
    }

    setModalVisible(false);
  };

  return (
    <div className="p-6">
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center gap-6">
          <Link to="/members">
            <div className="flex items-center gap-2">
              <FaArrowLeft />
              <h3>Back</h3>
            </div>
          </Link>
          <h1 className="font-bold text-[25px]">Members Detail</h1>
        </div>
        <div
          className="border flex bg-[#D92D20] text-white gap-2 py-2 px-4 cur rounded-lg cursor-pointer"
          onClick={() => setModalVisible(true)}
        >
          <img src={Circle} alt="Block Icon" />
          <div>Block Member</div>
        </div>
      </div>
      <Membercard />

      {/* Modal */}
      {isModalVisible && (
        <div className="fixed  inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-[20px]  text-center p-6 rounded-lg shadow-lg">
            <p>
              Are you sure you want to block this <br /> member?
            </p>
            <div className="flex gap-4 justify-center mt-6">
              <button
                onClick={handleBlockMember}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Block
              </button>
              <button
                onClick={() => setModalVisible(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Memberinfo;
