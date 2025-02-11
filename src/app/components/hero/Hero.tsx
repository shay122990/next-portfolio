"use client";
import { motion } from "framer-motion";
// import Image from "next/image";
import PolaroidCard from "../polaroid-card/Polaroid-Card";
export default function Hero() {
  return (
    <div className="relative flex flex-row lg:flex-row justify-between items-center w-full h-80 lg:h-[35rem] px-4 lg:px-20  mt-1 lg:mt-8">
      <div className="absolute inset-0 gradient-bg"></div>

      <motion.h1
        className="text-white text-4xl md:text-5xl lg:text-8xl font-bold lg:w-1/2 lg:text-left relative text-shadow"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Hi, I&apos;m Shay... <br />
        <span className="block mt-3">A React developer in Dubai</span>
      </motion.h1>


      <motion.div
        className="mt-0 lg:mt-32 relative"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <PolaroidCard
          imageSrc="/images/hero-image.jpg"
          altText="developer image"
        />
      </motion.div>
    </div>
  );
}