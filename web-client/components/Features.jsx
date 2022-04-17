import React from "react";
import { AiOutlineCar } from "react-icons/ai";

const Features = () => {
  return (
    <div className="flex mx-auto w-9/12 px-10 h-32 bg-white items-center justify-between">
      <div className="flex h-[]">
        {/* Car icon */}
        <div className="icon h-full">
          <AiOutlineCar className="h-12 w-12 border-4 p-2 border-black" />
        </div>
        <h1>500+</h1> <br />
        <p>car garages</p>
      </div>
    </div>
  );
};

export default Features;
