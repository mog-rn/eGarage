import React from "react";
import DashboardBanner from "../components/DashboardBanner";
import DashboardSearch from "../components/DashboardSearch";
import SideBar from "../components/reusables/SideBar";
import UserView from "../components/UserView";

const Dashboard = () => {
  return (
    <div className="flex bg-[#F6FBF2] h-screen">
      <SideBar />

      <div className="p-5">
        <DashboardSearch />
        <DashboardBanner />
      </div>
      
    </div>
  );
};
export default Dashboard;
