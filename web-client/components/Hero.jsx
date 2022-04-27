import Image from "next/image";
import React from "react";
import Features from "./Features";
import SearchBar from "./reusables/Search";

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
        <SearchBar />
        <div className="pt-10 mx-auto">
          <Features />
        </div>
      </div>
    </div>
  );
};

export default Hero;
