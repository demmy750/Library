import { Card } from "../cards/card";
import X from "../../assets/xrp-(xrp).svg";
import heart from "../../assets/heart-slash (1).svg";
import activity from "../../assets/activity.png";
import usericon from "../../assets/user-cirlce-add.svg";

function Membersstat() {
  const stats = [
    {
      title: "Active members",
      value: "5",
      icon: (
        <img src={activity} alt="Activity" className="w-6 h-6 text-white" />
      ),
      color: "bg-green-600",
      background: "bg-[#3B9B7B]",
    },
    {
      title: "Inactive members",
      value: "0",
      icon: <img src={heart} alt="Inactive" className="w-6 h-6" />,
      color: "bg-purple-600",
      background: "bg-[#DC6803]",
    },
    {
      title: "Recently added members",
      value: "2",
      icon: <img src={usericon} alt="Recently Added" className="w-6 h-6" />,
      color: "bg-orange-600",
      background: "bg-[#5261BC]",
    },
    {
      title: "Blocked members",
      value: "0",
      icon: <img src={X} alt="Blocked" className="w-6 h-6 text-white" />,
      color: "bg-blue-800",
      background: "bg-[#A35CC5]",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
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

export default Membersstat;
