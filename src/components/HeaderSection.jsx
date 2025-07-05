import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";

const HeaderSection = () => {
  const [navShow, setNavShow] = useState(false);
  const navShowHide = () => setNavShow((prev) => !prev);

  return (
    <div className="w-full">
      <nav className="bg-gray-400/20 w-full flex items-center md:justify-between justify-between px-5 py-5">
        <div className="relative text-xl flex gap-3 font-bold items-center">
          <div className="flex">
            <button className="md:hidden text-2xl" onClick={navShowHide}>
              <RiMenu2Fill />
            </button>
            {navShow && (
              <div className="absolute md:hidden border-2 text-base rounded-lg top-14 font-bold bg-gray-100 text-gray-700 p-4">
                <ul className="flex flex-col gap-2 text-nowrap">
                  <a href="./../../index.html">
                    <h1 className="text-lg font-semibold cursor-pointer font-serif hover:text-cyan-700 duration-300 transition">
                      MRI Rakib
                    </h1>
                  </a>
                  <li className="text-base font-medium hover:bg-cyan-600 hover:text-white transition-all duration-200 py-1 px-3 rounded-lg">
                    <a href="#profile">Profile</a>
                  </li>
                  <li className="text-base font-medium hover:bg-cyan-600 hover:text-white transition-all duration-200 py-1 px-3 rounded-lg">
                    <a href="#about">About</a>
                  </li>
                  <li className="text-base font-medium hover:bg-cyan-600 hover:text-white transition-all duration-200 py-1 px-3 rounded-lg">
                    <a href="#skills">Skills</a>
                  </li>
                  <li className="text-base font-medium hover:bg-cyan-600 hover:text-white transition-all duration-200 py-1 px-3 rounded-lg">
                    <a href="#projects">Projects</a>
                  </li>
                  <li className="text-base font-medium hover:bg-cyan-600 hover:text-white transition-all duration-200 py-1 px-3 rounded-lg">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <a href="./../../index.html">
          <h1 className="md:block hidden text-2xl font-semibold cursor-pointer font-serif hover:text-cyan-700 duration-300 transition">
            MRI Rakib
          </h1>
        </a>

        <ul className="md:flex hidden items-center gap-3">
          <li className="text-base font-medium hover:bg-cyan-600 hover:text-white transition-all duration-200 py-1 px-3 rounded-lg">
            <a href="#profile">Profile</a>
          </li>
          <li className="text-base font-medium hover:bg-cyan-600 hover:text-white transition-all duration-200 py-1 px-3 rounded-lg">
            <a href="#about">About</a>
          </li>
          <li className="text-base font-medium hover:bg-cyan-600 hover:text-white transition-all duration-200 py-1 px-3 rounded-lg">
            <a href="#skills">Skills</a>
          </li>
          <li className="text-base font-medium hover:bg-cyan-600 hover:text-white transition-all duration-200 py-1 px-3 rounded-lg">
            <a href="#projects">Projects</a>
          </li>
          <li className="text-base font-medium hover:bg-cyan-600 hover:text-white transition-all duration-200 py-1 px-3 rounded-lg">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a
          href="./../assets/cv_3_updated-photo-description.pdf"
          download="CV of Md Rakibul Islam Rakib.pdf"
          className="px-3 py-2 rounded-md bg-white hover:bg-black hover:text-white transition duration-300 text-base font-medium"
        >
          Download CV
        </a>
      </nav>
    </div>
  );
};

export default HeaderSection;
