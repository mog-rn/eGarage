import Image from "next/image";
import React from "react";
import Features from "./Features";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="h-auto">
        <Image src="/images/garage.jpeg" layout="fill" />
      </div>
      <div className="absolute top-[100px] left-[76px] w-screen space-y-2">
        <p className="flex items-start flex-col text-white text-[69px] font-bold ml-10">
          Discover more than <br />
          <span className="underline underline-offset-[20px] decoration-[13px] decoration-[#118024]">
            1000+ garages
          </span>
        </p>
        <div className="flex justify-center h-[95px] border-[#118024] border-4 w-4/5 rounded-lg">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow outline-none placeholder:text-white bg-transparent text-white"
          />
        </div>
        <div>
        <Features />
        </div>
      </div>
    </div>
  );
};

export default Hero;
