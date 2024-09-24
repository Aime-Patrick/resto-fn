import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
const Layout: React.FC = () => {
  return (
    <>
      <div className="h-screen w-full flex">
        <div>
          <Sidebar />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
