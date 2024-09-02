import React from "react";
import profilepics from "../../assets/Frame 1618868669.svg";
import api from "../../api/axios";

export const Membercard = () => {
  const [Memberpic, setMemberpic] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api("https://api.example.com/member");
      try {
        console.log(response.data);
        setMemberpic(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-start mt-10 gap-6">
      {memberinfo.map((member, index) => (
        <div
          key={index}
          className="flex items-start border p-8 rounded-md bg-white"
        >
          <div>
            <img src={profilepics} className="w-52" alt="Profile" />
          </div>
          <div className="flex flex-col gap-6 justify-center ml-20 w-full">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-3xl">{member.name}</h1>
              <h3 className="font-extralight">ID: {member.ID}</h3>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex justify-between w-full">
                <h1 className="font-bold text-xl">Address</h1>
                <div>{member.address}</div>
              </div>
              <div className="flex justify-between">
                <h1 className="font-bold text-xl">Date of Birth</h1>
                <div>{member.Birth}</div>
              </div>
              <div className="flex justify-between">
                <h1 className="font-bold text-xl">Phone Number</h1>
                <div>{member.Number}</div>
              </div>
              <div className="flex justify-between">
                <h1 className="font-bold text-xl">Email</h1>
                <div>{member.Email}</div>
              </div>
              <div className="flex justify-between">
                <h1 className="font-bold text-xl">Number of books borrowed</h1>
                <div>{member.borrowed}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
