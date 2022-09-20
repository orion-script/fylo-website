import React from "react";
import logo from "../images/logo.svg";
import location from "../images/icon-location.svg";
import phone from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-footers w-full h-auto text-white font-serif">
      <div className="md:flex md:flex-row w-full md:justify-around pt-16 pb-5 px-5">
        <div className="md:flex md:flex-col md:justify-between lg:w-3/12 md:w-2/5 lg:pl-105">
          <div className="w-3/6 md:pb-8 pl-8">
            <img src={logo} alt="icon-logo" className="w-full" />
          </div>
          <div className="flex flex-row w-11/12 md:w-`3/6 py-5 m-auto">
            <div className="w-3/12">
              <img src={location} alt="icon-location" className="w-3/12" />
            </div>
            <div className="w-11/12 md:w-full">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incidunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-1/4 w-3/6 flex flex-col pb-5">
          <div className="flex flex-row justify-around w-full">
            <div className="">
              <img src={phone} alt="icon-phone" />
            </div>
            <div className="">
              <p>+1-543-123-4567</p>
            </div>
          </div>
          <div className="flex flex-row justify-around w-full py-5">
            <div className="">
              <img src={email} alt="icon-email" />
            </div>
            <div className="">
              <p>example@fylo.com</p>
            </div>
          </div>
        </div>

        <div className="w-3/6 md:w-1/6 pb-5 px-5">
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Job</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
          </ul>
        </div>

        <div className="md:w-1/6 w-3/6 px-5 pb-5">
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-row justify-center md:w-1/6 w-3/6 m-auto pt-8">
          <a href="https://">
            <FaFacebook className="text-5xl" />
          </a>
          <a href="https://">
            <FaTwitter className="px-1 text-5xl" />
          </a>
          <a href="https://">
            <FaInstagram className="text-5xl" />
          </a>
        </div>
      </div>

      <div className="m-auto md:w-3/12 w-10/12 text-center font-serif text-base">
        <p>
          Designed by &copy;
          <a target="_blank" href="https://github.com/Hadestech01">
            HadesCodes
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
