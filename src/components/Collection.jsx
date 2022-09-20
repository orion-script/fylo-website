import React from "react";
import access from "../images/icon-access-anywhere.svg";
import security from "../images/icon-security.svg";
import collaboration from "../images/icon-collaboration.svg";
import storeFile from "../images/icon-any-file.svg";

function Collection() {
  return (
    <div className="bg-currently text-white lg:py-5 font-serif">
      <div class="w-full md:flex md:flex-row md:justify-around">
        <div className="w-11/12 md:w-5/12 m-auto pt-20">
          <img
            src={access}
            alt="access-anywhere"
            className="m-auto w-3/12 py-6"
          />
          <h1 className="md:text-2xl text-2xl lg:text-4xl text-center w-full m-auto py-2">
            Access your files, anywhere
          </h1>
          <p className="md:text-base lg:text-2xl text-center">
            The ability to use a smart phone, tablet, or computer to access your
            account means your files follow you anywhere.
          </p>
        </div>
        <div className="w-11/12 md:w-5/12 m-auto py-10">
          <img
            src={security}
            alt="icon-security"
            className="m-auto w-3/12 py-6"
          />
          <h1 className="md:text-2xl text-2xl lg:text-4xl text-center w-full m-auto py-2">
            Security you can trust
          </h1>
          <p className="md:text-base lg:text-2xl text-center">
            2-factor authentication and user-controlled encryption are just a
            couple of the securiy features we allow to help secure your files.
          </p>
        </div>
      </div>
      <div className="bg-currently w-full md:flex md:flex-row md:justify-around">
        <div className="w-11/12 md:w-5/12  m-auto">
          <img
            src={collaboration}
            alt="icon-collaboration"
            className="m-auto w-3/12 py-6"
          />
          <h1 className="md:text-2xl text-2xl lg:text-4xl text-center w-full m-auto py-2">
            Real time collaboration
          </h1>
          <p className="md:text-base lg:text-2xl text-center">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>

        <div className="w-11/12 md:w-5/12  m-auto py-10">
          <img
            src={storeFile}
            alt="icon-store"
            className="m-auto w-3/12 py-6"
          />
          <h1 className="md:text-2xl text-2xl lg:text-4xl text-center w-full m-auto py-2">
            Store any time of file
          </h1>
          <p className="md:text-base lg:text-2xl text-center">
            Whether you're sharing holidays photos or work documents, fylo has
            you covered allowing for all file and types to be securely stored
            and shared.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Collection;
