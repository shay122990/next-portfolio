import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import About from "./components/about-section/About";
import Projects from "./components/projects-section/Projects";
import Contact from "./components/contact-section/Contact";
import Experience from "./components/experience-section/Experience";
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-200 dark:from-[#111] dark:to-[#333] bg-opacity-40 rounded-lg">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
