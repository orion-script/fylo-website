import React from "react";

function EarlyAccess() {
  return (
    <div className="bg-currently py-5 w-full text-white text-center h-auto pb-32 font-serif">
      <div className=" bg-access w-4/5 md:w-5/6 lg:w-1/2 m-auto h-auto rounded-lg shadow-2xl">
        <h1 className="pt-12 font-bold text-2xl md:text-5xl">
          Get early access today
        </h1>
        <p className="py-10 px-5">
          It only take a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="md:flex md:flex-row md:justify-between w-11/12 m-auto pb-5">
          <div className="w-5/6 md:w-4/6 m-auto mb-5">
            <form>
              <input
                type="text"
                className="rounded-full h-10 w-full md:w-full text-black"
                placeholder="    email@example.com"
              />
            </form>
          </div>
          <div className="md:w-1/4 w-5/6 m-auto md:m-0">
            <button className="bg-sky rounded-full h-10 w-full md:w-full">
              Get Started For Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EarlyAccess;
