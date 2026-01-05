import HeaderSection from "./components/HeaderSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col items-center max-w-[1480px] mx-auto w-full bg-black text-white font-serif">
      <HeaderSection></HeaderSection>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>
      <FooterSection></FooterSection>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
