import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import vestilogo2 from "../../assets/vestilogo2.png";
import home from "../../assets/home.png";
import book from "../../assets/book.svg";
import profileicon from "../../assets/profileicon.svg";
import arrow2 from "../../assets/arrow-2.svg";
import setting from "../../assets/setting.png";
import logout from "../../assets/logout.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const activeLink = location.pathname;

  return (
    <div className="relative h-screen flex">
      <div
        className={`bg-white  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 h-full w-64 z-50 sm:translate-x-0 sm:relative sm:w-64 flex flex-col`}
      >
        <div className="py-8 flex flex-col space-y-10">
          <a href="/dashboard" className="flex pl-10 mb-8">
            <img className="w-20" src={vestilogo2} alt="Logo" />
          </a>
          <nav className="flex">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/dashboard"
                  className={`flex items-center gap-4 p-4 text-gray-700 ${
                    activeLink === "/dashboard"
                      ? "text-green-600 border-l-4 border-green-600"
                      : "hover:text-green-600"
                  }`}
                >
                  <img src={home} alt="Dashboard" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/books"
                  className={`flex items-center gap-4 p-4 text-gray-700 ${
                    activeLink === "/books"
                      ? "text-green-600 border-l-4 border-green-600"
                      : "hover:text-green-600"
                  }`}
                >
                  <img
                    className="h-5 hover:bg-green-500"
                    src={book}
                    alt="Books"
                  />
                  <span>Books</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/members"
                  className={`flex items-center gap-4 p-4 text-gray-700 ${
                    activeLink === "/members"
                      ? "text-green-500 border-l-4 border-green-500"
                      : "hover:text-green-600"
                  }`}
                >
                  <img src={profileicon} alt="Members" />
                  <span>Members</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/request"
                  className={`flex items-center gap-4 p-4 text-gray-700 ${
                    activeLink === "/request"
                      ? "text-green-500 border-l-4 border-green-500"
                      : "hover:text-green-500"
                  }`}
                >
                  <img src={arrow2} alt="Requests" />
                  <span>Requests</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/membersetting"
                  className={`flex items-center gap-4 p-4 text-gray-700 ${
                    activeLink === "/membersetting"
                      ? "text-green-500 border-l-4 border-green-500"
                      : "hover:text-green-500"
                  }`}
                >
                  <img src={setting} alt="Settings" />
                  <span>Settings</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="p-4 mt-auto flex items-center gap-4 mb-10">
          <img src={logout} alt="Logout" />
          <a href="/" className="text-gray-700 hover:text-red-500 ">
            <button className="text-gray-700 hover:text-red-500 ">
              Logout
            </button>
          </a>
        </div>
      </div>

      {/* Hamburger menu (visible on smaller screens, disappears when sidebar is open) */}
      {!isOpen && (
        <button
          className="sm:hidden py-2 z-50 text-gray-700 fixed top-4 left-4"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu size={26} />
        </button>
      )}

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;
