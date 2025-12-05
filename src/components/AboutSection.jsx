import aboutImage from "/i1.jpg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full max-w-5xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10"
    >
      {/* Left Side Image */}
      <div>
        <img
          src={aboutImage}
          alt="About Me"
          className="md:w-80 md:h-80 sm:w-60 sm:h-60 w-40 h-40 rounded-full shadow-lg object-cover"
        />
      </div>

      {/* Right Side Text */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Hi, I'm Md Rakibul Islam Rakib. I am a passionate Full Stack Developer
          specializing in MERN stack. I love building responsive, modern web
          applications with React, Node.js, Express, and MongoDB.
        </p>
        <p className="text-gray-700 leading-relaxed">
          I enjoy learning new technologies, contributing to open-source
          projects, and continuously improving my skills to deliver high-quality
          software.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
