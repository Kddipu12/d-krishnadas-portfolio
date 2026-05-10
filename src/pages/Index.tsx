import Navigation from "@/components/Navigation";
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
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navigation />
      <Hero />
      <div className="max-w-6xl mx-auto px-8 py-24 space-y-48">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </div>
    </main>
  );
};

export default Index;
