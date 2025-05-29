"use client";

import Divider from "../divider/Divider";
import { FaReact, FaCodeBranch, FaBolt, FaRocket } from "react-icons/fa";

const iconList = [FaReact, FaBolt, FaRocket, FaCodeBranch];

const About = () => {
  return (
    <section className="relative w-full px-4 lg:px-10 py-28 flex flex-col items-center justify-between">
      <Divider text="About Me" id="about" />
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/2 top-[20%] -translate-x-1/2 w-[80vw] h-[80vw] bg-cyan-300/10 dark:bg-cyan-400/10 rounded-full blur-[150px]" />
      </div>
      <article className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center lg:items-stretch gap-10 border border-gray-300/30 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-lg rounded-xl shadow-xl px-6 lg:px-16 py-16 transition-all duration-300">
        <div className="flex flex-row lg:flex-col justify-center items-center gap-4">
          {iconList.map((Icon, i) => (
            <div
              key={i}
              className={`text-4xl w-20 h-20 flex items-center justify-center rotate-${[-6, 5, -3, 4][i]} hover:rotate-0 transition-transform duration-300 
              ${i % 2 === 0 ? "text-cyan-500" : "text-purple-500"}
              drop-shadow-md hover:drop-shadow-[0_0_25px_rgba(0,255,255,0.6)]`}
            >
              <Icon />
            </div>
          ))}
        </div>
        <div className="w-full h-[2px] lg:w-[2px] lg:h-auto bg-gradient-to-r lg:bg-gradient-to-b from-cyan-400 to-blue-500 dark:from-cyan-300 dark:to-purple-400 animate-pulse rounded-full my-8 lg:my-0 lg:mx-8 shrink-0" />
        <div className="flex-1 flex items-center">
          <div className="space-y-6 text-xl lg:text-2xl font-light leading-relaxed text-gray-900 dark:text-gray-200 drop-shadow-sm dark:drop-shadow-[0_0_5px_rgba(0,255,255,0.2)]">
            <p>
              I’m Shay — a front-end developer who enjoys turning ideas into clean, fast, and responsive websites. I mainly work with{" "}
              <span className="font-semibold text-cyan-600 dark:text-cyan-300">React</span> and{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-300">Next.js</span>, and I care a lot about performance, accessibility, and good UI.
            </p>

            <p>
              I’ve built e-commerce platforms, landing pages, dashboards, and more — always focusing on structure, reusability, and smooth user experience.
            </p>

            <p>
              I like working closely with designers, solving layout challenges, and writing code that actually makes sense six months later.
            </p>

            <p>
              Whether you need a full front-end build, help on a team, or someone to clean up what’s already there — I can help.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
