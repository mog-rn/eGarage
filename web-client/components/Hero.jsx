import Image from "next/image";
import React from "react";
import Features from "./Features";
import {GrLocation} from "react-icons/gr"

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="h-auto">
        <Image src="/images/garage.jpeg" layout="fill" />
      </div>
      <div className="absolute top-[100px] left-[76px] w-screen space-y-2">
        <p className="flex items-start flex-col text-white text-[50px] py-12 font-bold ml-10">
          Discover more than <br />
          <span className="underline underline-offset-[8px] decoration-[13px] decoration-[#118024]">
            1000+ garages
          </span>
        </p>
        <div className="flex items-center px-5 justify-between h-20 border-[#118024] border-4 w-4/5 rounded-lg ">
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 outline-none placeholder:text-white bg-transparent text-white"
          />
          <div className="flex w-full flex-grow">
        <GrLocation className="text-[#118024] h-6 w-6 ml-5" />
          <select name="locations" id="locations">
            <option value="">Nairobi</option>
          </select>
        </div>
        <button className="bg-[#118024] text-white p-5">Search</button>
        </div>
        
        <div>
        <Features />
        </div>
      </div>
    </div>
  );
};

export default Hero;
