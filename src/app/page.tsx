import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
export default function Home() {
  return (
    <>
      <Header/>
        <main className="flex flex-col items-center justify-center">
          <Hero/>
          <About/>
          <Projects/>
          <Experience/>
          <Contact/>
        </main>
      <Footer/>
    </>
  );
}
