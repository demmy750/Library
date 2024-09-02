import React, { useState } from "react";
import ReactDOM from "react-dom";
import { IoIosArrowDown } from "react-icons/io";
import filter from "../../assets/filter.png";

// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex z-50 justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-600 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

const FilterPanel = (props) => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white">
      <h2 className="text-lg font-medium mb-4">Filter</h2>
      <form>
        {/* <div className="mb-4">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date range
            </label>
            <button type="button" className="text-sm text-[#518C36] mt-1">
              Reset
            </button>
          </div>
          <div className="flex justify-between space-x-2 mt-2">
            <input
              type="date"
              className="w-full p-2 border rounded-md"
              placeholder="Start Date"
            />
            <input
              type="date"
              className="w-full p-2 border rounded-md"
              placeholder="End Date"
            />
          </div>
        </div> */}
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Activity
            </label>
            <button type="button" className="text-sm text-[#518C36] mt-1">
              Reset
            </button>
          </div>
          <select className="w-full p-2 border rounded-md">
            <option>Blocked </option>
          </select>
        </div>
        <div className="mb-4">
          <div className="flex justify-between items-center gap-10">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of books borrowed
            </label>
            <button type="button" className="text-sm text-[#518C36] mt-1">
              Reset
            </button>
          </div>
          <select className="w-full p-2 border rounded-md">
            <option>110</option>
          </select>
        </div>
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <button type="button" className="text-sm text-[#518C36] mt-1">
              Reset
            </button>
          </div>
          <select className="w-full p-2 border rounded-md">
            <option>A-Z</option>
          </select>
        </div>
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Member ID
            </label>
            <button type="button" className="text-sm text-[#518C36] mt-1">
              Reset
            </button>
          </div>
          <select className="w-full p-2 border rounded-md">
            <option>A-Z</option>
          </select>
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <button
            type="button"
            className="text-sm text-gray-600 border py-1 px-4 rounded-md"
          >
            Reset all
          </button>
          <button
            type="button"
            className="px-4 py-1 bg-green-500 text-white rounded-md"
            onClick={() => {
              props.handleFilter();
              props.closeModal();
            }}
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export const Filterbuttondashboard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        className="bg-[whitesmoke] border text-black px-4 py-2 text-[18px] rounded-md flex items-center space-x-2"
        onClick={openModal}
      >
        <img src={filter} alt="" className="w-5 h-5" />
        <span className="ml-2">Filter</span>
        <IoIosArrowDown className="ml-2 mt-0.5 w-4" />
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <FilterPanel
          handleFilter={props.handleFilter}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
};
