"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex flex-row lg:flex-row justify-between items-center w-full h-80 lg:h-[35rem] px-4 lg:px-20  mt-1 lg:mt-8">
      <div className="absolute inset-0 z-0 gradient-bg"></div>

      <motion.h1
        className="text-white text-xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold lg:w-1/2 lg:text-left relative z-10"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Hi, I&apos;m Shay... <br />A React developer in Dubai
      </motion.h1>

      <motion.div
        className="mt-0 lg:mt-32 relative z-10"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="/images/hero-image.jpg"
          alt="developer image"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg shadow-pink-400/50 hero-image"
          priority
        />
      </motion.div>
    </div>
  );
}