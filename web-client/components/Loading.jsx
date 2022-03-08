import React from "react";
import { BallTriangle, Bars } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex align-center justify-center">
      <Bars color="#00BFFF" height={80} width={80} />
      <span>Loading...</span>
    </div>
  );
};

export default Loading;
