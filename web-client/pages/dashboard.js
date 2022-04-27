import React from "react";
import DashboardBanner from "../components/DashboardBanner";
import DashboardSearch from "../components/DashboardSearch";
import SideBar from "../components/reusables/SideBar";
import UserView from "../components/UserView";
import Head from "next/head";

const Dashboard = () => {
  return (
    <div className="flex bg-[#F6FBF2] h-screen w-screen">
      <Head>
        <title>Dashboard</title>
      </Head>
      <SideBar />

      <div className="p-5 flex-grow">
        <DashboardSearch />
        <div className="w-full">
        <DashboardBanner />
        </div>
      </div>
      
    </div>
  );
};
export default Dashboard;
