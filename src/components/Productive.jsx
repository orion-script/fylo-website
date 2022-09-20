import React from "react";
import productive from "../images/illustration-stay-productive.png";
import Arrow from "../images/icon-arrow.svg";

function Productive() {
  return (
    <div className="bg-currently w-full text-white md:flex md:flex-row md:justify-between m-auto font-serif">
      <div className="w-5/6 md:w-2/5 m-auto">
        <img src={productive} alt="pics-productive" />
      </div>
      <div className="w-11/12 md:w-1/2 md:pt-20 py-10 px-8 m-auto">
        <h1 className="lg:text-5xl md:text-2xl text-xl md:w-4/5">
          Stay productive, wherever you are.
        </h1>
        <p className="mt-6 md:my-2 text-base md:text-sm lg:text-xl">
          Never let location be an issue when accessing your files. fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="mt-4 text-base md:text-sm lg:text-xl">
          Securely share files and folders with friends, and colleagues for live
          collaboration. No email attachments required.
        </p>
        <div className="mt-6 md:my-2 flex flex-row text-sm border-b min-w-max w-10 py-1 lg:text-xl">
          <a href="https://tailwindcss.com/docs/padding">See how fylo work</a>
          <img
            src={Arrow}
            alt="icon-arrow"
            className="md:h-6 md:w-5 h-5 w-5 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Productive;
