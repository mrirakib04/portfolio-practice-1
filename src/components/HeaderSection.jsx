import React from "react";

const HeaderSection = () => {
  return (
    <div className="w-full">
      <nav className="bg-gray-400/20 w-full flex items-center justify-between px-5 py-5">
        <a href="./../../index.html">
          <h1 className="text-2xl font-semibold cursor-pointer font-serif hover:text-cyan-700 duration-300 transition">
            MRI Rakib
          </h1>
        </a>
        <ul className="flex items-center gap-3">
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
