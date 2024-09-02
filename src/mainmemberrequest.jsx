import React, { useState } from "react";
import Sidebar from "./components/sidebars/sidebar";
import Navbar from "./components/navbar/navbar";
import Requestcard from "./requestcard";
import { Mainrequest } from "./mainrequest";
import { Specialrequest } from "./components/booklists/specialrequest";

export const Mainmemberrequest = () => {
  const [tab, setTab] = useState("Regular");
  const [request, setrequest] = useState([]);
  const handleFilter = async () => {
    console.log("This is where my filter comes");

    // setIsLoading(true);
    try {
      const response = await api.get(
        "https://library-management-system-hctm.onrender.com/api/filter?resource=requests&status=Pending&name=Okonta Onyeka"
      );
      console.log(response.data);
      setrequest(response.data);
    } catch (error) {
      console.error("Failed to fetch books:", error);
      // } finally {
      //   setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar className="fixed top-0 left-0 h-full w-[250px] bg-gray-800" />
      <div className="flex-1 flex flex-col bg-[#F9FAFB] overflow-y-auto">
        <Navbar />
        <div className="p-8">
          <Requestcard />
          <div className="flex gap-4  border border-white rounded-md bg-white w-fit p-2 ml-3 mt-10 items-center">
            <div
              onClick={() => setTab("Regular")}
              className={`cursor-pointer border-r text-[20px] font-semibold  px-4 ${
                tab === "Regular" ? "text-[#518C36]" : "text-[#667085]"
              }`}
            >
              Regular
            </div>
            <div
              onClick={() => setTab("Special")}
              className={`cursor-pointer text-[20px] font-semibold pr-4 ${
                tab === "Special" ? "text-[#518C36]" : "text-[#667085]"
              }`}
            >
              Special
            </div>
          </div>
          {tab === "Regular" && <Mainrequest handleFilter={handleFilter} />}
          {tab === "Special" && (
            <Specialrequest request={request} setrequest={setrequest} />
          )}
        </div>
      </div>
    </div>
  );
};
