import React from "react";
import SideBar from "../components/reusables/SideBar";

const FAQs = () => {
  return (
    <div className="flex bg-[#F6FBF2]">
      <SideBar />

      <div className="p-10 flex-grow">
        <h1 className='font-bold items-center justify-center pb-10 text-3xl flex text-center'>FAQs</h1>
      </div>
    </div>
  );
};

export default FAQs;
