import { Card } from "../cards/card";
import boook from "../../assets/boook.png";
import peopleicon from "../../assets/profile-2user (1).svg";
import arrow from "../../assets/arrow-2 (1).svg";

function TopStats() {
  const stats = [
    {
      title: "Number of members",
      value: "5",
      icon: <img src={peopleicon} alt="" className="w-6 h-6 text-white" />,
      color: "bg-green-600",
      background: "bg-[#3B9B7B]",
    },
    {
      title: "Available books",
      value: "20",
      icon: <img src={boook} alt="" className="w-6 h-6" />,
      color: "bg-purple-600",
      background: "bg-[#A35CC5]",
    },
    {
      title: "Borrowed Books",
      value: "0",
      icon: <img src={arrow} alt="" className="w-6 h-6" />,
      color: "bg-orange-600",
      background: "bg-[#DC6803]",
    },
    {
      title: "Damaged Books",
      value: "0",
      icon: <img src={peopleicon} alt="" className="w-6 h-6 text-white" />,
      color: "bg-blue-800",
      background: "bg-[#5261BC]",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card
          key={index}
          title={stat.title}
          icon={stat.icon}
          value={stat.value}
          color={stat.color}
          background={stat.background}
        />
      ))}
    </div>
  );
}

export default TopStats;
