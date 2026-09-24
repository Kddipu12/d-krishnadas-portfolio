import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-[#ececec] p-2 sm:p-3 md:p-4">
      <div className="overflow-hidden rounded-[28px] bg-white">
      <SiteNav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      </div>
    </main>
  );
};

export default Index;
