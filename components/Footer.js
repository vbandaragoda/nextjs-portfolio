import React from "react";
import Image from "next/image";
import Logo from "../public/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 mt-5 me-5 mb-0 ms-5">
      <div className="w-full max-w-screen-xl mx-auto pb-4 md:py-8 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            {/* <img src="./Logo.png" className="h-8 mr-3"/> */}
            <Image src={Logo} className="h-8 w-auto mr-3" alt="Logo" />
            <span className="text-2xl font-burtons dark:text-white">
              vimukthi
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-gray-400">
          <li>
              <a href="/" className="mr-4 hover:underline md:mr-6 ">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="mr-4 hover:underline md:mr-6 ">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="mr-4 hover:underline md:mr-6 ">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-black sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="/" className="hover:underline">
            {/* Vimukthi™ */}
          </a>
           All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
