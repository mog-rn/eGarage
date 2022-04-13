import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="h-auto">
        <Image src="/images/garage.jpeg" layout="fill" />
      </div>
      <div className="absolute top-[100px] left-[76px] w-full space-y-32">
        <p className="flex items-start flex-col text-white text-[69px] font-bold ml-10">
          Discover more than <br />
          <span className="underline underline-offset-[20px] decoration-[13px] decoration-[#118024]">
            1000+ garages
          </span>
        </p>
        <div className="flex justify-center h-[95px] border-[#118024] border-4 w-5/6 rounded-lg">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow outline-none placeholder:text-white bg-transparent text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
