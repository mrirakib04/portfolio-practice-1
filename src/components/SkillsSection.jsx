import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiFigma,
} from "react-icons/si";

const SkillsSection = () => {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      color: "text-orange-500",
      border: "border-orange-500/30",
      shadow: "shadow-orange-500/10",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      color: "text-blue-500",
      border: "border-blue-500/30",
      shadow: "shadow-blue-500/10",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      color: "text-teal-400",
      border: "border-teal-400/30",
      shadow: "shadow-teal-400/10",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "text-yellow-400",
      border: "border-yellow-400/30",
      shadow: "shadow-yellow-400/10",
    },
    {
      name: "React",
      icon: <FaReact />,
      color: "text-cyan-400",
      border: "border-cyan-400/30",
      shadow: "shadow-cyan-400/10",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: "text-white",
      border: "border-white/20",
      shadow: "shadow-white/5",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "text-green-500",
      border: "border-green-500/30",
      shadow: "shadow-green-500/10",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      color: "text-gray-300",
      border: "border-gray-400/20",
      shadow: "shadow-gray-400/5",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "text-green-400",
      border: "border-green-400/30",
      shadow: "shadow-green-400/10",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      color: "text-yellow-500",
      border: "border-yellow-500/30",
      shadow: "shadow-yellow-500/10",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      color: "text-purple-500",
      border: "border-purple-500/30",
      shadow: "shadow-purple-500/10",
    },
    {
      name: "Figma",
      icon: <SiFigma />,
      color: "text-pink-500",
      border: "border-pink-500/30",
      shadow: "shadow-pink-500/10",
    },
  ];

  return (
    <section
      id="skills"
      className="w-full max-w-6xl mx-auto px-4 py-10 bg-[#050505]"
    >
      <div className="flex flex-col items-center mb-8">
        <h2 className="sm:text-3xl text-2xl md:text-4xl font-bold text-white mb-2">
          My Skills
        </h2>
        <div className="h-1 w-20 bg-purple-600 rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, i) => (
          <div
            data-aos="zoom-in"
            key={i}
            className={`flex flex-col items-center justify-center gap-3 p-6 border rounded-2xl bg-white/5 transition-all duration-300 group hover:scale-105 ${skill.border} ${skill.shadow} hover:border-purple-500/50 hover:shadow-purple-500/20`}
          >
            <div
              className={`text-5xl ${skill.color} group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all`}
            >
              {skill.icon}
            </div>
            <p className="font-semibold text-gray-300 text-sm tracking-wide">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
