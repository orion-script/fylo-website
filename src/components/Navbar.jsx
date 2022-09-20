import React from "react";
import logo from "../images/logo.svg";

function Navbar() {
  return (
    <div className="bg-gray w-full pt-20 text-white font-serif">
      <div className="flex justify-between w-5/6 m-auto">
        <img src={logo} alt="Logo" className="w-1/6" />

        <div className="">
          <a href="#" className="pr-5 md:pr-16 hover:underline">
            Features
          </a>
          <a href="#" className="pr-5 md:pr-16 hover:underline">
            Team
          </a>
          <a href="#" className="hover:underline">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
