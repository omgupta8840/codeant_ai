import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import { IoMdCloudOutline, IoMdCode } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuBookDown } from "react-icons/lu";
import { MdOutlineCall } from "react-icons/md";
import { Link, useLocation } from "react-router";

export default function SidebarLayout({ children, onUsernameChange }) {
  const [Open, setOpen] = useState(false);
  const [username, setUserName] = useState("utkarshdhairyapanwar");
  const location = useLocation();

  const toggleSidebar = () => {
    setOpen(!Open);
  };

  const navItems = [
    {
      icon: <HiOutlineHome />,
      label: "Repositories",
      path: "/",
    },
    {
      icon: <IoMdCode />,
      label: "AI Code Review",
      path: "/ai-code-review",
    },
    {
      icon: <IoMdCloudOutline />,
      label: "Cloud Security",
      path: "/cloud-security",
    },
    {
      icon: <LuBookDown />,
      label: "Security Scanning",
      path: "/security-scanning",
    },
    {
      icon: <IoSettingsOutline />,
      label: "Settings",
      path: "/settings",
    },
    {
      icon: <MdOutlineCall />,
      label: "Support",
      path: "/support",
    },
    {
      icon: <FiLogOut />,
      label: "Logout",
      path: "/login",
    },
  ];

  const sampleUser = [
    {
      value: "utkarshdhairyapanwar",
      label: "Utkarsh Dhairya Panwar",
    },
    
    {
      value: "Ayush891f",
      label: "Ayush Gupta",
    },
   
  ];

  const handleUsernameChange = (e) => {
    const userName = e.target.value;
    setUserName(userName);
    onUsernameChange(userName);
  };

  return (
    <div>
      
      <div className="w-full p-4 top-0 left-0 z-50 flex justify-between items-center md:hidden">
        <span className="flex items-center gap-3">
          <img src="/codeantLogo.svg" />
          <h2 className="company-name text-xl md:text-2xl">CodeAnt AI</h2>
        </span>
        <FaBars className="text-2xl cursor-pointer" onClick={toggleSidebar} />
      </div>

      
      {Open && (
        <div className="top-12 left-0 w-full fixed bg-white z-40 md:hidden">
          <div className="p-4">
            <select
              className="w-full border p-2 rounded"
              value={username}
              onChange={handleUsernameChange}
            >
              {sampleUser.map((user) => (
                <option value={user.value} key={user.value}>
                  {user.label}
                </option>
              ))}
            </select>
          </div>
          <ul className="space-y-4 p-4">
            {navItems.map((navItem) => (
              <li
                key={navItem.path}
                onClick={toggleSidebar}
              >
                <Link to={navItem.path} className={`flex items-center space-x-4 px-4 py-2 hover:bg-[#1570EF20] cursor-pointer `}>
                  {navItem.icon}
                  <span>{navItem.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      
      <div className="hidden md:flex fixed top-0 left-0 h-screen w-64 flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mx-auto p-4">
            <img src="/logo.svg" />
            <h2 className="company-name text-xl md:text-2xl">CodeAnt AI</h2>
          </div>
          <div className="py-2 px-4">
            <select
              className="w-full border p-2 rounded"
              value={username}
              onChange={handleUsernameChange}
            >
              {sampleUser.map((user) => (
                <option value={user.value} key={user.value}>
                  {user.label}
                </option>
              ))}
            </select>
          </div>
          <ul className="space-y-4 mt-5">
            {navItems.slice(0, 5).map((navItem) => (
              <li key={navItem.path}>
                <Link
                  to={navItem.path}
                  className={`flex items-center space-x-4 px-4 mx-4 py-2 rounded-md cursor-pointer ${
                    navItem.path === location.pathname
                      ? "bg-[#1570EF] font-bold text-white"
                      : "text-black hover:bg-[#1570EF20]"
                  }`}
                >
                  {navItem.icon}
                  <span>{navItem.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className="mb-4">
          {navItems.slice(5, 8).map((navItem) => (
            <li key={navItem.path}>
              <Link
                to={navItem.path}
                className={`flex items-center space-x-4 px-4 mx-4 py-2 rounded-md cursor-pointer ${
                  navItem.path === location.pathname
                    ? "bg-[#1570EF] font-bold text-white"
                    : "text-black hover:bg-[#1570EF20]"
                }`}
              >
                {navItem.icon}
                <span>{navItem.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

     
      <div className="flex-1 ml-0 md:ml-64 p-4 bg-[#FAFAFA] h-screen">
        {children}
      </div>
    </div>
  );
}
