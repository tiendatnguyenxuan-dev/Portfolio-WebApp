import HeroSection from "./_components/HeroSection"
import { GlobalBackground } from "@/components/global-background";
import { AboutSection } from "./_components/AboutSection"
import { SkillsSection } from "./_components/SkillsSection";
import { SectionConnector } from "./_components/SectionConnector";
import { ProjectsSection } from "./_components/ProjectsSection";
import { ServicesSection } from "./_components/ServicesSection";
import { ContactSection } from "./_components/ContactSection";

export default function Home() {
  
  return (
    <main className="relative bg-background selection:bg-primary/20">
      <GlobalBackground />
      <HeroSection />
      
      <div className="relative z-10">
        <AboutSection />
        <SectionConnector variant="right-to-left" />
        <SkillsSection />
        <SectionConnector variant="left-to-right" />
        <ProjectsSection />
        <SectionConnector variant="right-to-left" />
        <ServicesSection />
        <SectionConnector variant="left-to-right" />
        <ContactSection />
      </div>
    </main>
  );
}
