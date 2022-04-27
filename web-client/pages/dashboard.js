import React from "react";
import DashboardSearch from "../components/DashboardSearch";
import SideBar from "../components/reusables/SideBar";
import UserView from "../components/UserView";

const Dashboard = () => {
  return (
    <div className="flex bg-[#F6FBF2] h-screen">
      <SideBar />

      <div>
        <DashboardSearch />
      </div>
    </div>
  );
};
export default Dashboard;
