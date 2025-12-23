import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import TeachStack from "@/components/TeachStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TeachStack />
      <Projects />
      <Footer />
      
    </>
  );
}
