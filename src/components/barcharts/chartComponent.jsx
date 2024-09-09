import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { GoArrowSwitch, GoPeople } from "react-icons/go";

function ChartComponent() {
  const visitorsData = [
    { name: "Jan", value: 0 },
    { name: "Feb", value: 0 },
    { name: "Mar", value: 0 },
    { name: "Apr", value: 0 },
    { name: "May", value: 0 },
    { name: "Jun", value: 0 },
    { name: "Jul", value: 0 },
    { name: "Aug", value: 0 },
    { name: "Sep", value: 2 },
    { name: "Oct", value: 0 },
    { name: "Nov", value: 0 },
    { name: "Dec", value: 0 },
  ];

  const borrowedBooksData = [
    { name: "Jan", value: 0 },
    { name: "Feb", value: 0 },
    { name: "Mar", value: 0 },
    { name: "Apr", value: 0 },
    { name: "May", value: 0 },
    { name: "Jun", value: 0 },
    { name: "Jul", value: 0 },
    { name: "Aug", value: 0 },
    { name: "Sep", value: 0 },
    { name: "Oct", value: 0 },
    { name: "Nov", value: 0 },
    { name: "Dec", value: 0 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-4 justify-between">
          <div className="flex items-center justify-start">
            <img
              src="/src/assets/profile-2user (1).svg"
              alt=""
              className="w-6 h-6 text-[#3B9B7B] mr-3"
            />
            <div>
              <h3 className="text-lg font-bold">New Visitors</h3>
              <p className="text-xl font-bold text-gray-800 mr-2">2</p>
            </div>
          </div>

          <select className="bg-gray-100 text-gray-600 items- rounded">
            <option>This Month</option>
            <option>This Week</option>
            <option>This Year</option>
          </select>
        </div>

        <ResponsiveContainer width="100%" height={190}>
          <LineChart data={visitorsData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{ backgroundColor: "#000", color: "#fff" }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#4CAF50"
              strokeWidth={4}
              dot={{ r: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-4 justify-between">
          <div className="flex items-center justify-start">
            <GoArrowSwitch className="w-6 h-6 text-orange-500 mr-3" />
            <div>
              <h3 className="text-lg font-bold">Books Borrowed</h3>
              <p className="text-xl font-bold text-gray-800 mr-2">0</p>
            </div>
          </div>
          <select className="bg-gray-100 text-gray-600 items- rounded">
            <option>This Month</option>
            <option>This Week</option>
            <option>This Year</option>
          </select>
        </div>

        <ResponsiveContainer width="100%" height={190}>
          <LineChart data={borrowedBooksData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{ backgroundColor: "#000", color: "#fff" }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#FF9800"
              strokeWidth={4}
              dot={{ r: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ChartComponent;
