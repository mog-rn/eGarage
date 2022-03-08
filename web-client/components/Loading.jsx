import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex align-center justify-center">
      <BallTriangle color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loading;
