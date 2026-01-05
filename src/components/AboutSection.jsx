import aboutImage from "/coder.avif";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-8 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side: Image (Occupying roughly 1/3 on large screens) */}
        <div
          className="w-full lg:w-1/3 flex justify-center relative"
          data-aos="fade-right"
        >
          <div className="relative group">
            {/* Decorative Background Blur */}
            <div className="absolute -inset-4 bg-purple-500/20 rounded-[2.5rem] blur-2xl group-hover:bg-purple-500/30 transition duration-500"></div>

            {/* Main Image Container */}
            <div className="relative glass border border-white/10 rounded-[2.5rem] p-2 overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Md Rakibul Islam Rakib"
                className="w-full h-auto max-w-[320px] lg:max-w-full aspect-[4/5] object-cover rounded-[2rem] transition-transform duration-700 group-hover:scale-105"
              />

              {/* Experience Badge */}
              <div className="absolute bottom-6 right-6 glass-dark border border-black/60 p-4 rounded-2xl bg-gray-200/90 backdrop-blur-xl animate-bounce-slow">
                <h3 className="text-2xl font-bold text-purple-600">1.5+</h3>
                <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold leading-none">
                  Years of <br /> Experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Detailed Content */}
        <div className="flex-1 space-y-6" data-aos="fade-left">
          <div className="inline-block">
            <span className="text-purple-500 font-bold tracking-[0.3em] uppercase text-sm mb-2 block">
              About Me
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Bridging Design with <br />
              <span className="text-purple-500 font-serif italic">
                Full-Stack
              </span>{" "}
              Code.
            </h2>
          </div>

          <div className="space-y-4 text-gray-400 leading-relaxed sm:text-base text-sm md:text-lg">
            <p>
              I am{" "}
              <span className="text-white font-semibold">
                Md Rakibul Islam Rakib
              </span>
              , a passionate Full Stack Web Developer based in{" "}
              <span className="text-white">Gazipur, Bangladesh</span>. My
              journey started with a spark of curiosity while watching my elder
              brother build the web, which quickly evolved into a deep-seated
              passion for problem-solving through code.
            </p>
            <p>
              With over{" "}
              <span className="text-purple-400 font-bold">
                1.5 years of hands-on experience
              </span>
              , I specialize in the{" "}
              <span className="text-white underline decoration-purple-500/50 underline-offset-4">
                MERN Stack
              </span>
              . I thrive on building scalable applications that solve complex
              problems, focusing on both aesthetic frontend interfaces and
              robust backend logic.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-3 glass border border-white/5 p-4 rounded-2xl hover:bg-white/5 transition">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 font-bold">
                🎯
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Role</h4>
                <p className="text-xs text-gray-500">Full Stack Developer</p>
              </div>
            </div>

            <div className="flex items-center gap-3 glass border border-white/5 p-4 rounded-2xl hover:bg-white/5 transition">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 font-bold">
                📍
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Location</h4>
                <p className="text-xs text-gray-500">Gazipur, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="pt-6">
            <a
              href="#contact"
              className="purple-gradient px-8 py-4 rounded-2xl md:text-lg font-bold text-white shadow-md hover:shadow-lg shadow-purple-900/80 hover:shadow-purple-900/70 bg-linear-to-br from-purple-800 via-purple-800 to-sky-800 hover:from-purple-900 hover:via-purple-900 transition-all duration-300 inline-flex items-center gap-2"
            >
              Let's Start Building
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
