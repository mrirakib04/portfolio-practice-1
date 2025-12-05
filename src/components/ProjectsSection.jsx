import React from "react";

const projects = [
  {
    name: "Sinthia Kitchen Shop – Web",
    subtitle: "Modern Kitchen E-Commerce Platform",
    description:
      "A full-featured web e-commerce platform for kitchen products with product management, order handling, secure authentication, and admin dashboard. Smooth shopping experience with responsive UI and MERN stack.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "SSL Commerze",
    ],
    live: "https://mrirakib-sks-web-test.netlify.app/",
    github: "https://github.com/mrirakib04/sks-web",
  },
  {
    name: "HR3 Managements - Request Management Platform",
    subtitle: "Streamlined Request Management",
    description:
      "A modern web app to handle user and admin requests with secure authentication, dynamic request management, analytics, and responsive UI for smooth operations.",
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
    name: "PH Assignment-10 - EcoTrack",
    subtitle: "Sustainable Living Community",
    description:
      "Web platform for promoting sustainable living by tracking eco-friendly habits, sharing tips, and participating in community challenges. Built with React, Firebase, and Tailwind CSS.",
    tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    live: "https://mrirakib-ph-assignment-10.netlify.app/",
    github: "https://github.com/mrirakib04/ph-assignment-10-web",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">My Projects</h2>

      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <div
            data-aos="zoom-in"
            key={index}
            className="border-2 rounded-xl p-6 shadow-lg hover:shadow-cyan-400 transition-shadow duration-300"
          >
            <h3 className="md:text-2xl sm:text-xl text-lg font-semibold mb-2">
              {project.name}
            </h3>
            <h4 className="sm:text-lg text-base text-gray-500 mb-4">
              {project.subtitle}
            </h4>
            <p className="text-gray-700 mb-4 sm:text-base text-sm">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-cyan-100 text-cyan-700 rounded-md text-sm font-medium shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition duration-300 font-medium"
              >
                Live Site
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300 font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
