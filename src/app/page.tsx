import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import TechStack from "./components/tech-stack/TechStack";
import Contact from "./components/contact/Contact";
export default function Home() {
  return (
    <>
      <Header/>
        <main className="flex flex-col items-center justify-center">
          <Hero/>
          <About/>
          <Projects/>
          <TechStack/>
          <Contact/>
        </main>
      <Footer/>
    </>
  );
}
