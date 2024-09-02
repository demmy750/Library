import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import trash from "../../assets/trash.svg";
import pencil from "../../assets/pencil.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../api/axios";
import Confirmdelete from "../../confirmdelete"; // Ensure this path is correct
import { toast } from "react-toastify";

const Bookinfo = () => {
  const { id } = useParams();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    setIsModalOpen(false);
    setIsDeleting(true);

    try {
      const response = await api.delete(
        `https://library-management-system-hctm.onrender.com/api/books/${id}`,
        {
          // method: 'DELETE',
          // headers: {
          //   'Content-Type': 'application/json',
          // },
        }
      );
      toast.success("Book deleted successfully");
      navigate("/books");

      // if (response.ok) {
      //   console.log('Book deleted successfully');

      // } else {
      //   // console.error('Failed to delete the book:', response.statusText);
      // }
    } catch (error) {
      console.log(error);
      // setIsLoading(false);
    }
  };

  return (
    <div className="py-6 pl-6">
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center gap-6">
          <Link to="/books">
            <div className="flex items-center gap-2">
              <FaArrowLeft />
              <h3>Back</h3>
            </div>
          </Link>
          <h1 className="font-bold text-[25px]">Book Detail</h1>
        </div>
        <div className="flex gap-2">
          <Link
            to={`/edit-book/${id}`}
            className="flex items-center gap-1 border cursor-pointer rounded-xl py-2 px-6 bg-[#518C36] text-white"
          >
            <img src={pencil} alt="Edit icon" />
            <p>Edit</p>
          </Link>
          <div
            className={`flex items-center gap-1 border rounded-lg cursor-pointer px-6 py-2 bg-[#D92D20] text-white ${
              isDeleting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => setIsModalOpen(true)}
          >
            <img src={trash} alt="Delete icon" />
            <p>{isDeleting ? "Deleting..." : "Delete"}</p>
          </div>
        </div>
      </div>
      <Confirmdelete
        isOpen={isModalOpen}
        onConfirm={handleDelete}
        onCancel={() => setIsModalOpen(false)}
        message="Are you sure you want to delete this book?"
      />
    </div>
  );
};

export default Bookinfo;
