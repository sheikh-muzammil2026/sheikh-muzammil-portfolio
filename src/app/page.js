import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="container mx-automin-h-screen">
      
      <Hero/>
      <About />
      <Skills />
      <Education />
      <Experience />
  
    </main>
  );
}