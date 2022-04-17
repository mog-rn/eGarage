import Image from "next/image";
import React from "react";
import Features from "./Features";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Image src="/images/garage.jpeg" layout="fill" objectFit="cover" />
      <div className="relative mx-auto w-[80vw] z-10">
        <p className="flex justify-center flex-col text-white text-[50px] pt-48 pb-5  font-bold">
          Discover more than <br />
          <span className="underline underline-offset-[8px] decoration-[13px] decoration-[#118024]">
            1000+ garages
          </span>
        </p>
        <p className="text-white text-lg w-96 pb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna lectus.
        </p>
        <div
          className="flex items-center px-3 justify-between h-20 border-[#118024] border-4 
                w-4/5 space-x-8 rounded-lg mx-auto"
        >
          <HiOutlineSearch className="h-12 w-12 text-[#118024]" />
          <input
            type="text"
            placeholder="Enter garage name"
            className="w-1/2 outline-none placeholder:text-white bg-transparent text-white"
          />
          <div className="flex w-full flex-grow hover:cursor-pointer">
            <HiOutlineLocationMarker className="text-[#118024] h-8 w-8 ml-5" />
            <select
              name="locations"
              id="locations"
              className="bg-transparent text-white space-x-2"
            >
              <option value="">Enter Location</option>
            </select>
          </div>
          <button className="bg-[#118024] rounded-lg text-white px-6 py-3">
            Search
          </button>
        </div>
        <div className="pt-10 mx-auto">
          <Features />
        </div>
      </div>
    </div>
  );
};

export default Hero;
