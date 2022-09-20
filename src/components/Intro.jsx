import React from "react";
import intro from "../images/illustration-intro.png";

function Intro() {
  return (
    <div className="bg-gray w-full text-center text-white h-auto font-serif">
      <div className="py-10">
        <img src={intro} alt="intro" className="m-auto w-2/4" />
      </div>

      <h1 className="lg:text-4xl md:text-3xl text-xl lg:w-6/12 w-4/6 m-auto">
        All your files in one secure location, accessible anywhere.
      </h1>
      <div className="md:bg-[url('/src/images/bg-curvy-desktop.svg')] bg-[url('/src/images/bg-curvy-mobile.svg')] bg-cover bg-no-repeat bg-top lg:bg-right-top md:h-96">
        <div className="py-11 md:w-6/12 w-4/5 m-auto md:text-xl">
          <p>
            fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
        </div>
        <button className="bg-sky border-solid border-4 border-sky rounded-full w-56 p-2">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Intro;
