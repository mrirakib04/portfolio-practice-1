import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/mrir_with_bg.jpg";
import iamgeFile from "/i1.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowCircleDown } from "react-icons/md";
import { IoArrowRedoCircleOutline } from "react-icons/io5";

const HeaderSection = () => {
  const [navShow, setNavShow] = useState(false);
  const navShowHide = () => setNavShow((prev) => !prev);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full px-2 flex flex-col items-center bg-[#050505]" // Pure Black/Dark background
    >
      <section id="home"></section>

      {/* Navbar: Glassmorphism Style */}
      <nav className="bg-white/5 backdrop-blur-md border border-white/10 w-full flex items-center justify-between px-3 py-3 max-w-6xl mx-auto fixed mt-4 shadow-2xl z-50 rounded-full">
        <div className="flex items-center gap-2 relative">
          <button
            className="text-2xl md:hidden text-white"
            onClick={navShowHide}
          >
            <RiMenu2Fill />
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {navShow && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="absolute md:hidden border border-white/10 rounded-2xl top-14 left-0 font-bold bg-[#0a0a0a] text-gray-300 p-6 shadow-2xl z-50 min-w-[200px]"
              >
                <ul className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <li key={link.name} onClick={() => setNavShow(false)}>
                      <a
                        href={link.href}
                        className="text-base hover:text-purple-500 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          <a className="flex items-center gap-3 group" href="/">
            <img
              className="sm:w-10 w-9 border-b-2 border-l-2 border-purple-500 rounded-tl-xl rounded-b-2xl transition-all duration-300 group-hover:scale-110 shadow-lg shadow-purple-500/20"
              src={logo}
              alt="logo"
            />
            <h1 className="text-xl md:block hidden font-bold cursor-pointer font-serif text-white hover:text-purple-400 transition-colors">
              MRI Rakib
            </h1>
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="md:flex hidden items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <a
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-all"
              >
                {link.name}
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <a
          href="https://github.com/mrirakib04/"
          target="_blank"
          className="px-3 py-2 rounded-full flex items-center gap-2 bg-white text-black hover:bg-purple-600 hover:text-white transition duration-300 text-sm font-bold shadow-lg"
        >
          <FaGithub className="text-xl"></FaGithub> GitHub
        </a>
      </nav>

      {/* Hero Content Section */}
      <section className="w-full max-w-5xl mx-auto mt-40 mb-20 px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full text-center md:text-left"
        >
          <h2 className="text-purple-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">
            Welcome to my world
          </h2>
          <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-extrabold text-white leading-tight">
            Hi, I'm <br />
            <span className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-serif bg-gradient-to-r from-purple-400 to-sky-400 text-transparent bg-clip-text block mt-2">
              Md Rakibul Islam
            </span>
            <span className="md:text-4xl sm:text-3xl text-2xl font-serif text-white/90">
              Rakib
            </span>
          </h1>

          <div className="mt-6 text-gray-400 text-lg md:text-xl font-medium">
            Full Stack Developer |{" "}
            <span className="text-purple-400 underline decoration-purple-500/30 underline-offset-8">
              MERN Specialist
            </span>{" "}
            |{" "}
            <span className="text-white">
              <Typewriter
                words={["MongoDB", "Express.js", "React.js", "Node.js"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </div>

          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-4 py-2 rounded-xl flex items-center gap-2 bg-gradient-to-br from-purple-800 to-sky-800 text-white font-bold shadow-xl shadow-purple-900/20 hover:scale-105 transition-transform"
            >
              View My Works <IoArrowRedoCircleOutline className="text-xl" />
            </a>
            <a
              href="/Md Rakibul Islam Rakib_CV.pdf"
              download
              className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 transition-all flex items-center gap-2 group"
            >
              Download CV <MdOutlineArrowCircleDown className="text-xl" />
            </a>
          </div>
        </motion.div>

        {/* Image Section with Glow */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <img
            src={iamgeFile}
            alt="Md Rakibul Islam Rakib"
            className="relative w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 object-cover rounded-full border-4 border-white/5 shadow-2xl z-10"
          />
        </motion.div>
      </section>
    </motion.header>
  );
};

export default HeaderSection;
