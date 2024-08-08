import About from "@/components/About";
import Experience from "@/components/Experience";
import Homepage from "@/components/Homepage";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <div className="flex flex-col h-auto w-full scroll-smooth">
      <Homepage />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
