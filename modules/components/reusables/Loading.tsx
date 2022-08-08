import React from "react";
import { Rings } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Rings
        height="150"
        width="150"
        radius="9"
        color="#118024"
        ariaLabel=""
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
