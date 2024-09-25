import React, { useState } from "react";
import Restaurant from "../../../public/Restaurant.svg";
import { GoHome } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { HiOutlineChartPie } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";
import { HomeIconCard, HomeIconCardInverse } from "./HomeIcon";
const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(() => {
    return Number(localStorage.getItem("activeTab")) || 1;
  });
  const handleClick = (index: number) => {
    setIsActive(index);
    localStorage.setItem("activeTab", String(index));
  };
  const menu = [
    { name: "Home", path: "/", icon: <GoHome size={24} />, index: 1 },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <HiOutlineChartPie size={24} />,
      index: 2,
    },
    {
      name: "Message",
      path: "/messages",
      icon: <IoMailOutline size={24} />,
      index: 3,
    },
    {
      name: "Notification",
      path: "/notification",
      icon: <IoIosNotificationsOutline size={24} />,
      index: 4,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <IoSettingsOutline size={24} />,
      index: 5,
    },
    {
      name: "Logout",
      path: "/logout",
      icon: <IoLogOutOutline size={24} />,
      index: 6,
    },
  ];
  return (
    <>
      <div className="w-[100px] h-screen bg-primary-dark flex flex-col justify-between items-center py-5 pl-[0.45rem]">
        <div className="bg-primary-lighter w-[60px] h-[60px] flex items-center rounded-[12px]">
          <img
            src={Restaurant}
            alt="Logo"
            className="w-12 h-12 mx-auto"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="h-full w-full flex flex-col justify-between">
          <div>
            {menu.map(
              (item, index) =>
                index !== menu.length - 1 && (
                  <>
                    {isActive === item.index && <HomeIconCard />}
                    <div
                      className={`${
                        isActive === item.index
                          ? "w-[93px] h-[80px] bg-[#252836] rounded-l-[8px] flex justify-center items-center transition ease-linear delay-75"
                          : "w-[93px] h-[80px] flex justify-center items-center"
                      }`}
                    >
                      <NavLink
                        to={item.path}
                        key={index}
                        onClick={() => handleClick(item.index)}
                        className={`w-[56px] h-[56px] flex justify-center items-center ${
                          isActive === item.index
                            ? "bg-primary shadow rounded-[8px] transition ease-linear delay-75"
                            : ""
                        }`}
                      >
                        <i
                          className={`${
                            isActive === item.index
                              ? "text-white"
                              : "text-primary"
                          }`}
                        >
                          {item.icon}
                        </i>
                      </NavLink>
                    </div>
                    {isActive === item.index && <HomeIconCardInverse />}
                  </>
                )
            )}
          </div>
          <div>
            {menu.map(
              (item, index) =>
                index === menu.length - 1 && (
                  <>
                    {isActive === item.index && <HomeIconCard />}
                    <div
                      className={`${
                        isActive === item.index
                          ? "w-[90px] h-[80px] bg-[#252836] rounded-l-[8px] flex justify-center items-center"
                          : "w-[93px] h-[80px] flex justify-center items-center"
                      }`}
                    >
                      <NavLink
                        to={item.path}
                        key={index}
                        onClick={() => handleClick(item.index)}
                        className={`w-[56px] h-[56px] flex justify-center items-center ${
                          isActive === item.index
                            ? "bg-primary rounded-[8px]"
                            : ""
                        }`}
                      >
                        <i
                          className={`${
                            isActive === item.index
                              ? "text-white"
                              : "text-primary"
                          }`}
                        >
                          {item.icon}
                        </i>
                      </NavLink>
                    </div>
                  </>
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
