import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import TechStack from "./components/tech-stack/TechStack";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header/>
      <main>
        <About/>
        <Projects/>
        <TechStack/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}
