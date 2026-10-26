import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "../FindUs";
import Qzone from "../Qzone";

const RightLayout = () => {
  return (
    <div>
      <div className="*:mb-5">
        <SocialLogin></SocialLogin>
        <FindUs></FindUs>
        <Qzone></Qzone>
      </div>
    </div>
  );
};

export default RightLayout;
