import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Sinthia Kitchen Shop - Web",
    subtitle: "Modern Kitchen E-Commerce Platform",
    image: "https://i.ibb.co.com/5X9RqGGW/sks.jpg",
    description:
      "A full-featured web e-commerce platform for kitchen products with product management, order handling, secure authentication, and admin dashboard.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "SSL Commerze",
    ],
    live: "https://mrirakib-sks-web-test.netlify.app/",
    github: "https://github.com/mrirakib04/sks-web",
  },
  {
    name: "HR3 Managements",
    subtitle: "Request Management Platform",
    image: "https://i.ibb.co.com/CsvpcLVB/hr3.jpg",
    description:
      "A modern web app to handle user and admin requests with secure authentication, dynamic request management, and analytics.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Material UI",
    ],
    live: "https://mrirakib-web-practice-9.netlify.app/",
    github: "https://github.com/mrirakib04/web-practice-9",
  },
  {
    name: "EcoTrack",
    subtitle: "Sustainable Living Community",
    image: "https://i.ibb.co.com/mVQnLNKT/ph-a10.jpg",
    description:
      "Web platform for promoting sustainable living by tracking eco-friendly habits and participating in community challenges.",
    tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    live: "https://mrirakib-ph-assignment-10.netlify.app/",
    github: "https://github.com/mrirakib04/ph-assignment-10-web",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="w-full max-w-6xl mx-auto px-6 py-10 bg-[#050505]"
    >
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 text-center">
          My Projects
        </h2>
        <div className="h-1.5 w-20 bg-purple-600 rounded-full"></div>
      </div>

      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="flex flex-col md:flex-row gap-8 bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-purple-500/30 transition-all duration-300 shadow-xl group"
          >
            {/* Project Image: 1/3 Width on md/lg screens */}
            <div className="w-full md:w-1/3 overflow-hidden rounded-2xl h-56 md:h-auto">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Project Content: 2/3 Width on md/lg screens */}
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h3 className="sm:text-2xl text-xl md:text-3xl font-bold text-white mb-2">
                {project.name}
              </h3>
              <h4 className="text-purple-400 font-medium mb-4 italic">
                {project.subtitle}
              </h4>
              <p className="text-gray-400 mb-6 leading-relaxed sm:text-base text-sm">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/5 text-gray-300 border border-white/10 rounded-full text-xs font-medium hover:bg-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* General Style Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="px-6 py-2.5 bg-white text-black rounded-xl hover:bg-purple-600 hover:text-white transition duration-300 font-bold flex items-center gap-2 text-sm"
                >
                  Live Demo <FaExternalLinkAlt className="text-xs" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="px-6 py-2.5 bg-transparent border border-white/20 text-white rounded-xl hover:bg-white/10 transition duration-300 font-bold flex items-center gap-2 text-sm"
                >
                  GitHub <FaGithub className="text-base" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
