import React from "react";
import Quotes from "../images/bg-quotes.png";
import profile1 from "../images/profile-1.jpg";
import profile2 from "../images/profile-2.jpg";
import profile3 from "../images/profile-3.jpg";

function Gallery() {
  return (
    <div className="bg-currently w-full py-14 md:py-20 font-serif">
      <div className="w-11/12 m-auto">
        <img src={Quotes} alt="icon-quote" />
        <di className="md:flex justify-between text-white">
          <div className="bg-gray lg:w-1/4 md:w-60 mb-6 text-base shadow-2xl rounded-md">
            <p className="p-5">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex flex-row pb-4">
              <div className="pt-2 pl-6">
                <img
                  src={profile1}
                  alt="pics-profile1"
                  className="rounded-full w-10 h-10"
                />
              </div>
              <div className="flex flex-col pl-2">
                <h1 className="font-bold text-xl">Satish Patel</h1>
                <p className="">Funder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div className="bg-gray lg:w-1/4 md:w-60 mb-6 text-base shadow-2xl rounded-md">
            <p className="p-5">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex flex-row pb-4">
              <div className="pt-2 pl-6">
                <img
                  src={profile2}
                  alt="pics-profile2"
                  className="rounded-full w-10 h-10"
                />
              </div>
              <div className="flex flex-col pl-2">
                <h1 className="font-bold text-xl">Bruce Mckenzie</h1>
                <p className="">Funder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div className="bg-gray lg:w-1/4 md:w-60 mb-6 text-base shadow-2xl rounded-md">
            <p className="p-5">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex flex-row pb-4">
              <div className="pt-2 pl-6">
                <img
                  src={profile3}
                  alt="pics-profile3"
                  className="rounded-full w-10 h-10"
                />
              </div>
              <div className="flex flex-col pl-2">
                <h1 className="font-bold text-xl">Iva Boyd</h1>
                <p className="">Funder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </di>
      </div>
    </div>
  );
}

export default Gallery;
