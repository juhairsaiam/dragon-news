import React from "react";
import classroom from "../assets/class.png";
import play from "../assets/playground.png";
import swimming from "../assets/swimming.png";
const Qzone = () => {
  return (
    <div className="bg-gray-200 p-2">
      <h1 className="font-bold">Q-Zone</h1>
      <div className="flex flex-col">
        <img src={classroom}></img>
        <img src={play}></img>
        <img src={swimming}></img>
      </div>
    </div>
  );
};

export default Qzone;
