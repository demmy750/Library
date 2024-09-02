import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import camera from "../../assets/camera.svg";
import api from "../../api/axios";
import { toast } from "react-toastify";
export const Addnewbook = () => {
  const [ModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [formData, setformData] = useState({
    title: "",
    isbn: "",
    category: "",
    quantity: "",
    author: "",
    availability: "",
    synopsis: "",
  });

  const { title, isbn, category, quantity, author, availability, synopsis } =
    formData;

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [inputKey, setInputKey] = useState(Date.now()); // Used to reset the file input

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setInputKey(Date.now());
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await api.post("/books/", formData);
      toast.success("Book added successfully");
      closeModal();
      navigate("/books");
    } catch (error) {
      console.log(error);

      // setError('Invalid credentials'); // Set error message
      // setSuccess(null); // Clear any previous success message
    } finally {
    }
  };

  return (
    <div className="p-4">
      <button
        className="bg-[#259b25] text-white px-4 py-3 text-sm sm:text-base rounded-md flex items-center space-x-2 "
        onClick={openModal}
      >
        <FaPlus className="text-lg sm:text-xl" />
        <span className="ml-2 text-xs sm:text-sm">Add new book</span>
      </button>

      {ModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="w-[500px] p-10 bg-white border-[1px] h-fit rounded-lg">
            <div className="flex justify-between items-center">
              <h1 className="text-[25px] font-bold">Add a new book</h1>
              <RxCross1 className="cursor-pointer" onClick={closeModal} />
            </div>
            <div>
              <label className="border-[0.1rem] border-white rounded-md justify-center flex w-fit text-[0.7rem] py-[0.2rem] px-[0.8rem] font-bold ml-6 relative z-100 bg-[#FCFCFD] mt-4">
                BOOK NAME
              </label>
              <input
                className="border w-full p-[1.1rem] rounded-md z-10 mt-[-0.8rem]"
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Game of Thrones"
              />
            </div>
            <div className="flex justify-between mt-3">
              <div>
                <label className="border-[0.1rem] border-white rounded-md justify-center flex w-fit text-[0.7rem] py-[0.2rem] px-[0.8rem] font-bold ml-6 relative z-100 bg-[#FCFCFD]">
                  ISBN
                </label>
                <input
                  className="border w-[200px] p-[1.1rem] rounded-md z-10 mt-[-0.8rem]"
                  type="text"
                  id="isbn"
                  name="isbn"
                  value={isbn}
                  onChange={handleChange}
                  placeholder="0123456789"
                />
              </div>
              <div className="flex">
                <div>
                  <label className="border-[0.1rem] border-white rounded-md justify-center flex w-fit text-[0.7rem] py-[0.2rem] px-[0.8rem] font-bold ml-6 relative z-100 bg-[#FCFCFD]">
                    CATEGORY
                  </label>
                  <input
                    className="border w-[200px] p-[1.1rem] rounded-md z-10 mt-[-0.8rem]"
                    type="text"
                    id="category"
                    name="category"
                    value={category}
                    onChange={handleChange}
                    placeholder="Fantasy"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <div>
                <label className="border-[0.1rem] border-white rounded-md justify-center flex w-fit text-[0.7rem] py-[0.2rem] px-[0.8rem] font-bold ml-6 relative z-100 bg-[#FCFCFD]">
                  AMOUNT IN STOCK
                </label>
                <input
                  className="border w-[200px] p-[1.1rem] rounded-md z-10 mt-[-0.8rem]"
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={quantity}
                  onChange={handleChange}
                  placeholder="21"
                />
              </div>
              <div>
                <label className="border-[0.1rem] border-white rounded-md justify-center flex w-fit text-[0.7rem] py-[0.2rem] px-[0.8rem] font-bold ml-6 relative z-100 bg-[#FCFCFD]">
                  AVAILABLE FORMAT
                </label>
                <input
                  className="border w-[200px] p-[1.1rem] rounded-md z-10 mt-[-0.8rem]"
                  type="text"
                  id="availability"
                  name="availability"
                  value={availability}
                  onChange={handleChange}
                  placeholder="Hard copy"
                />
              </div>
            </div>
            <div>
              <label className="border-[0.1rem] border-white rounded-md justify-center flex w-fit text-[0.7rem] py-[0.2rem] px-[0.8rem] font-bold ml-6 relative z-100 bg-[#FCFCFD] mt-4">
                AUTHOR
              </label>
              <input
                className="border w-full p-[1.1rem] rounded-md z-10 mt-[-0.8rem]"
                type="text"
                id="author"
                name="author"
                value={author}
                onChange={handleChange}
                placeholder="George R.R Martin"
              />
            </div>
            <div>
              <label className="border-[0.1rem] border-white rounded-md justify-center flex w-fit text-[0.7rem] py-[0.2rem] px-[0.8rem] font-bold ml-6 relative z-100 bg-[#FCFCFD] mt-4">
                SYNOPSIS
              </label>
              <input
                className="border w-full h-full p-[1.1rem] rounded-md z-10 mt-[-0.8rem]"
                type="text"
                id="synopsis"
                name="synopsis"
                value={synopsis}
                onChange={handleChange}
                placeholder="Lorem ipsum dolor sit amet consectetur..."
              />
            </div>
            {/* <div className="border mt-6 flex gap-4 items-center justify-center p-4 rounded-md">
              <img src={camera} alt="" />
              <p>Add a photo</p>
            </div> */}
            <div>
              <div
                className="border mt-6 flex gap-4 items-center justify-center p-4 rounded-md cursor-pointer"
                onClick={handleClick}
              >
                {selectedFile ? (
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="Uploaded"
                    style={{ maxWidth: "200px", maxHeight: "200px" }}
                  />
                ) : (
                  <>
                    <img src={camera} alt="Camera Icon" />
                    <p>Add a photo</p>
                  </>
                )}
              </div>
              <input
                id="fileInput"
                type="file"
                key={inputKey}
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
            <div className="gap-4 flex mt-6 justify-end">
              <button
                className="py-2 px-6 border rounded-lg"
                onClick={closeModal}
              >
                Cancel
              </button>
              <div onClick={handleSubmit} type="submit">
                <button className="py-2 px-5 border rounded-lg bg-[#518C36] text-white ">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
