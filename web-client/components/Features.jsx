import React from "react";
import { AiOutlineCar } from "react-icons/ai";

const Features = () => {
  return (
    <div className="flex w-5/6 px-10 space-x-10 mx-auto h-32 bg-[#EAE8DF] rounded-2xl items-center justify-between">
      <div className="flex h-auto space-x-5">
        {/* Car icon */}
        <div className="icon h-auto flex space-x-5">
          <AiOutlineCar className="h-20 w-20 bg-[#F6FBF2] rounded-lg p-4" />
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-[#118024] text-4xl">500+</h1>
            <p className="text-lg text-transform: uppercase">car garages</p>
          </div>
        </div>
        {/* Bike icon */}
        <div className="icon h-auto flex space-x-5">
          <AiOutlineCar className="h-20 w-20 bg-[#F6FBF2] rounded-lg p-4" />
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-[#118024] text-4xl">500+</h1>
            <p className="text-lg text-transform: uppercase">car garages</p>
          </div>
        </div>
        {/* Usermechanic icon */}
        <div className="icon h-auto flex space-x-5">
          <AiOutlineCar className="h-20 w-20 bg-[#F6FBF2] rounded-lg p-4" />
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-[#118024] text-4xl">500+</h1>
            <p className="text-lg text-transform: uppercase">car garages</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
