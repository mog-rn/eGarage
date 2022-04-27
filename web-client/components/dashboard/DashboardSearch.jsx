import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const DashboardSearch = () => {
  return (
    <div className="relative p-10">
      <div className="flex h-12 w-96 items-center border-gray-400 bg-white rounded-lg space-x-3">
        <AiOutlineSearch className="h-8 w-8 pl-2" />
        <input
          type="text"
          name="dashboard_search"
          placeholder="Search Dashboard"
          id=""
          className="w-full outline-none h-full"
        />
      </div>
    </div>
  );
};

export default DashboardSearch;
