import React from "react";
import Image from "next/image";
import { GrLocation } from "react-icons/gr";

const GarageCard = () => {
  return (
    <div className="p-10 space-y-3">
      <h1 className="text-4xl font-semibold">Popular garages near you</h1>
      <p>Lorem ipsum et luctus venenat</p>
      <div className="max-w-sm space-y-8 rounded-lg border-black overflow-hidden shadow-lg p-10 bg-[#F6FBF2] py-12">
        <div className="flex items-center space-x-2">
          <img
            className="w-16 h-16 rounded-full"
            src="/images/garage.jpeg"
            layout="fill"
            alt="Mountain"
          />
          <div>
            {/* Garage name */}
            <h1 className="text-lg font-light">Sahil Garage</h1>
            {/* Location */}
            <div className=" text-lg font-extralight flex items-center space-x-1">
              <GrLocation className="" />
              <h2>Nairobi</h2>
            </div>
            {/* Review stars */}
          </div>
        </div>
        <div className="space-y-2">
          {/* category */}
          <h1 className="text-lg font-bold">Car Garage</h1>
          <p className="text-sm">This is a car garage</p>
          <div className="pt-8">
          <p>Opening: 0800 hrs</p>
          <p>Closing: 1800 hrs</p>
          </div>
        </div>
        <button className="bg-[#118024] text-transform: uppercase text-white p-2 rounded-md">Find now</button>
      </div>
    </div>
  );
};

export default GarageCard;
