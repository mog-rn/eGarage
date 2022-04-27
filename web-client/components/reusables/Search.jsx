import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";


const SearchBar = () => {
  return (
    <div
      className="flex items-center px-3 justify-between h-20 border-[#118024] border-4 
                w-4/5 space-x-8 rounded-lg mx-auto"
    >
      <HiOutlineSearch className="h-12 w-12 text-[#118024]" />
      <input
        type="text"
        placeholder="Enter garage name"
        className="w-1/2 outline-none placeholder:text-black bg-transparent text-black"
      />
      <div className="flex w-full flex-grow hover:cursor-pointer">
        <HiOutlineLocationMarker className="text-[#118024] h-8 w-8 ml-5" />
        <select
          name="locations"
          id="locations"
          className="bg-transparent text-black space-x-2"
        >
          <option value="">Enter Location</option>
        </select>
      </div>
      <button className="bg-[#118024] rounded-lg text-white px-6 py-3">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
