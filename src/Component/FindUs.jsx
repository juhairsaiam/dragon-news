import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-4">
      <h2 className="font-bold my-4">Find Us On</h2>

      <button className="btn bg-[#1A77F2] text-white border-[#005fd8] w-full">
        <FaFacebook></FaFacebook>Facebook
      </button>

      {/* X */}
      <button className="btn bg-black text-white border-black w-full my-2">
        <FaTwitter></FaTwitter> Login with X
      </button>

      <button className="btn bg-[#1A77F2] text-white border-[#005fd8] w-full">
        <FaInstagram></FaInstagram>Instagram
      </button>
    </div>
  );
};

export default FindUs;
