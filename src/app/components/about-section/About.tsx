"use client";

import Divider from "../divider/Divider";
import { FaReact, FaCodeBranch, FaBolt, FaRocket } from "react-icons/fa";

const iconList = [FaReact, FaBolt, FaRocket, FaCodeBranch];

const About = () => {
  return (
    <section className="relative w-full px-4 lg:px-10  flex flex-col items-center justify-between z-0">
      <Divider text="About Me" id="about" />
      <article className="relative z-10 w-full flex flex-col lg:flex-row items-center lg:items-stretch lg:gap-20 border  bg-gradient-to-br from-white to-gray-200 dark:from-[#111] dark:to-[#333] bg-opacity-40 rounded-lg px-6 lg:px-16 py-16 transition-all duration-300 border-green-400">
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
        <div className="w-full h-[2px] lg:w-[2px] lg:h-auto p-1 bg-gradient-to-r lg:bg-gradient-to-b from-cyan-400 to-blue-500 dark:from-cyan-300 dark:to-purple-400 animate-pulse rounded-full my-8 lg:my-0 lg:mx-8 shrink-0" />
        <div className="flex-1 flex justify-center">
          <div className="space-y-8 text-sm lg:text-xl w-3/4  font-light leading-relaxed text-gray-900 dark:text-gray-200 drop-shadow-sm dark:drop-shadow-[0_0_5px_rgba(0,255,255,0.2)]">
            <p>
              Hi there, I’m Shay — a front-end developer <br />who enjoys turning ideas into clean, fast, and responsive websites. I mainly work with{" "}
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
