import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const DashboardSearch = () => {
  return (
    <div className="">
      <AiOutlineSearch className="" />
      <input
        type="text"
        name="dashboard_search"
        placeholder="Search Dashboard"
        id=""
        className="w-full outline-none"
      />
    </div>
  );
};

export default DashboardSearch;
