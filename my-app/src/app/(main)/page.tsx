import HeroSection from "./_components/HeroSection"
import { GlobalBackground } from "@/components/global-background";
import { AboutSection } from "./_components/AboutSection"
import { SkillsSection } from "./_components/SkillsSection";
import { SectionConnector } from "./_components/SectionConnector";
import { ProjectsSection } from "./_components/ProjectsSection";
import { ContactSection } from "./_components/ContactSection";

export default function Home() {
  
  return (
    <main className="relative bg-background selection:bg-primary/20">
      <GlobalBackground />
      <HeroSection />
      
      <div className="relative z-10 bg-background">
        <div className="absolute top-0 left-0 right-0 h-32 -mt-32 bg-linear-to-b from-transparent to-background pointer-events-none" />
        <AboutSection />
        <SectionConnector variant="right-to-left" />
        <SkillsSection />
        <SectionConnector variant="left-to-right" />
        <ProjectsSection />
        <SectionConnector variant="right-to-left" />
        <ContactSection />
      </div>
    </main>
  );
}
