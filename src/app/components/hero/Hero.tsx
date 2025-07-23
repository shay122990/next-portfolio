"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <div className="relative flex flex-row lg:flex-row justify-between items-center w-full h-80 lg:h-[35rem] px-4 lg:px-20 z-10">
      <div className="absolute inset-0 z-0 gradient-bg dark:hidden" />
      <div className="absolute inset-0 z-0 hidden dark:block gradient-bg-dark" />

      <motion.div
        className="relative z-10 w-1/2 max-w-[90%] md:max-w-[45%] text-left"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold leading-tight mb-4 text-shadow">
          Hi, I&apos;m Shay<span className="text-green-500">.</span>
        </h1>

        <p className="text-md sm:text-lg md:text-xl lg:text-4xl font-medium text-white">
          <Typewriter
            words={[
              "React Developer in Dubai",
              "Creative Front-End Engineer",
              "Passionate Problem Solver",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={75}
            deleteSpeed={30}
            delaySpeed={800}
          />
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-6"
        >
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-green-500 transition"
          >
            View Projects
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-0 lg:mt-32 relative shadow-lg rounded-lg"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="/images/hero-image.jpg"
          alt="developer image"
          width={500}
          height={500}
          className=" rounded-lg hero-image"
          priority
        />
      </motion.div>
    </div>
  );
}
