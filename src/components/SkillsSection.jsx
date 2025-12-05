import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiFigma,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const SkillsSection = () => {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      color: "text-orange-500",
      border: "border-orange-400",
      shadow: "shadow-orange-300",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      color: "text-blue-500",
      border: "border-blue-400",
      shadow: "shadow-blue-300",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      color: "text-teal-400",
      border: "border-teal-300",
      shadow: "shadow-teal-200",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      color: "text-purple-600",
      border: "border-purple-400",
      shadow: "shadow-purple-300",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "text-yellow-400",
      border: "border-yellow-300",
      shadow: "shadow-yellow-200",
    },
    {
      name: "React",
      icon: <FaReact />,
      color: "text-cyan-500",
      border: "border-cyan-400",
      shadow: "shadow-cyan-300",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: "text-gray-800",
      border: "border-gray-600",
      shadow: "shadow-gray-400",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "text-green-600",
      border: "border-green-400",
      shadow: "shadow-green-300",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      color: "text-gray-700",
      border: "border-gray-500",
      shadow: "shadow-gray-400",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "text-green-500",
      border: "border-green-400",
      shadow: "shadow-green-300",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      color: "text-yellow-500",
      border: "border-yellow-400",
      shadow: "shadow-yellow-300",
    },
    {
      name: "Figma",
      icon: <SiFigma />,
      color: "text-pink-500",
      border: "border-pink-400",
      shadow: "shadow-pink-300",
    },
  ];

  return (
    <section id="skills" className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">My Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <div
            data-aos="zoom-in"
            key={i}
            className={`flex flex-col items-center justify-center gap-2 p-4 border-2 rounded-lg ${skill.border} shadow-md ${skill.shadow} hover:scale-105 transition-transform duration-300`}
          >
            <div className={`text-4xl ${skill.color}`}>{skill.icon}</div>
            <p className="font-semibold text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
