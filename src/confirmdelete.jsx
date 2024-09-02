import React from 'react';

const Confirmdelete = ({ isOpen, onConfirm, onCancel, message }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      role="dialog"
      aria-labelledby="confirm-delete-title"
      aria-modal="true"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2
          id="confirm-delete-title"
          className="text-lg text-center font-bold mb-4"
        >
          {message}
        </h2>
        <div className="flex justify-center gap-4 pt-4">
          <button
            className="px-4 py-2 bg-[#D92D20] text-white rounded-[10px] hover:bg-[#b02d1b] focus:outline-none focus:ring-2 focus:ring-[#D92D20] focus:ring-opacity-50"
            onClick={onConfirm}
          >
            Delete
          </button>
          <button
            className="px-4 py-2 text-[#667085] border rounded-[10px] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#667085] focus:ring-opacity-50"
            onClick={onCancel}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmdelete;
