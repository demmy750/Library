import { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import api from "../../api/axios";
import { toast } from "react-toastify";

function MembersTable() {
  const [Members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await api.get(
          "https://library-management-system-hctm.onrender.com/api/auth/members-only"
        );
        setMembers(response.data.members);
      } catch (error) {
        console.error("Failed to fetch members:", error);
      }
    };

    fetchMembers();
  }, []);

  const handleBlockClick = (member) => {
    setSelectedMember(member);
    setModalVisible(true);
  };

  const handleConfirmBlock = async () => {
    if (selectedMember) {
      try {
        await api.put(
          `https://library-management-system-hctm.onrender.com/api/auth/${selectedMember._id}/block`
        );
        setMembers((prevMembers) =>
          prevMembers.filter((member) => member._id !== selectedMember._id)
        );
        setModalVisible(false);
        toast.success("member blocked successfully");
      } catch (error) {
        console.error("Failed to block member:", error);
      }
    }
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex items-center justify-between mb-4"></div>
      <table className="w-full bg-white rounded-sm shadow">
        <thead className="bg-[#DFFFD0]">
          <tr>
            <th className="p-4 text-left text-[#1D2939]">ID</th>
            <th className="p-4 text-left text-[#1D2939]">Member Name</th>
            <th className="p-4 text-left text-[#1D2939]">Email</th>
            <th className="p-4 text-left text-[#1D2939]">Phone No.</th>
            <th className="p-4 text-left text-[#1D2939]">Books Borrowed</th>
            <th className="p-4 text-left text-[#1D2939]">Action</th>
          </tr>
        </thead>
        <tbody>
          {Members.map((member) => (
            <tr key={member._id} className="border-b last:border-none">
              <td className="p-4 text-gray-700">
                <Link to="/info">{member._id}</Link>
              </td>
              <td className="p-4 text-gray-700">{member.name}</td>
              <td className="p-4 text-gray-700">{member.email}</td>
              <td className="p-4 text-gray-700">{member.phoneNumber}</td>
              <td className="p-4 text-gray-700">{member.booksBorrowed}</td>
              <td className="p-4">
                <button
                  className="text-[#F04438] flex items-center gap-2 "
                  onClick={() => handleBlockClick(member)}
                >
                  <MdOutlineCancel />
                  Block
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50  z-50">
          <div className="bg-white p-4 rounded-md shadow">
            <p className="mb-4 w-64 text-center">
              Are you sure you want to block this Member?
            </p>
            <div className="flex gap-4 justify-center">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={handleConfirmBlock}
              >
                Block
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded-md"
                onClick={handleCancel}
              >
                Go back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MembersTable;
