import React from "react";
import edit from "../../assets/edit.svg";
import trash from "../../assets/trash2.svg";

function Actionmodal() {
  return (
    <div className="flex  w-fit h-fit absolute">
      <div className="p-6 bg-white rounded-lg shadow-lg max-w-xs ">
        {/* <div className="flex gap-4 items-center mb-6 cursor-pointer">
          <img src={edit} alt="" />
          <span className="text-lg font-semibold text-gray-800">Edit Book</span>
        </div> */}
        {/* <div className="border-t border-gray-300 mb-6"></div> */}
        <div className="flex gap-2 items-center cursor-pointer">
          <img src={trash} alt="" />
          <span className="text- font-semibold text-red-500">Delete Book</span>
        </div>
      </div>
    </div>
  );
}

export default Actionmodal;
