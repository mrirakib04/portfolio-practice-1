import React from "react";
import HeaderSection from "./components/HeaderSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

const App = () => {
  return (
    <div className="flex flex-col items-center max-w-[1480px] mx-auto w-full">
      <HeaderSection></HeaderSection>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>
      <FooterSection></FooterSection>
    </div>
  );
};

export default App;
