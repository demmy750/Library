import React from "react";

const FilterPanel = () => {
  return (
    <div className="w-full  max-w-sm mx-auto p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-lg font-medium mb-4">Filter</h2>
      <form>
        <div className="mb-4">
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
        </div>
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
            <option>Blocked</option>
          </select>
        </div>
        <div className="mb-4">
          <div className="flex justify-between items-center">
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
              label
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
              Member id
            </label>
            <button type="button" className="text-sm text-[#518C36] mt-1">
              Reset
            </button>
          </div>
          <select className="w-full p-2 border rounded-md">
            <option>A-Z</option>
          </select>
        </div>

        <div className="flex  justify-end gap-4 mt-4">
          <button
            type="button"
            className="text-sm text-gray-600 border py-1 px-4 rounded-md"
          >
            Reset all
          </button>
          <button
            type="submit"
            className="px-4 py-1 bg-green-500 text-white rounded-md"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterPanel;
