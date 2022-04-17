import React from "react";
import Image from "next/image";
import { GrLocation } from "react-icons/gr";

const GarageCard = () => {
  return (
    <div className="p-10 space-y-3">
      <h1 className="text-4xl font-semibold">Popular garages near you</h1>
      <p>Lorem ipsum et luctus venenat</p>
      <div class="max-w-sm space-y-8 rounded border-black overflow-hidden shadow-lg p-10 py-12">
        <div className="flex items-center space-x-2">
          <img
            class="w-16 h-16 rounded-full"
            src="/images/garage.jpeg"
            layout="fill"
            alt="Mountain"
          />
          <div>
            {/* Garage name */}
            <h1>Sahil Garage</h1>
            {/* Location */}
            <div className="flex items-center space-x-1">
              <GrLocation className="" />
              <h2>Nairobi</h2>
            </div>
            {/* Review stars */}
          </div>
        </div>
        <div className="space-y-2">
          {/* category */}
          <h1 className="text-lg">Car Garage</h1>
          <p className="text-sm">Lorem</p>
          <p>Opening: 08:00</p>
          <p>Closing: 18:00</p>
        </div>
        <button className="bg-[#118024] text-white p-2 rounded-md">Find now</button>
      </div>
    </div>
  );
};

export default GarageCard;
