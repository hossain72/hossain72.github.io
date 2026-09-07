import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import BackgroundGrid from "../components/BackgroundGrid";
import FloatingOrbs from "../components/FloatingOrbs";
import ScrollProgress from "../components/ScrollProgress";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <FloatingOrbs />
      <BackgroundGrid />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
