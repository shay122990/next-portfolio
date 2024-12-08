"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex flex-row lg:flex-row justify-between items-center w-full h-80 lg:h-[35rem] px-4 lg:px-20  mt-1 lg:mt-8">
      <div className="absolute inset-0 z-0 gradient-bg"></div>

      <motion.h1
        className="text-blue-700 text-3xl md:text-4xl lg:text-8xl font-semibold lg:w-1/2 lg:text-left relative z-10"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span>Hi, I&apos;m Shay...</span>
        <span className="block mt-4">A React developer in Dubai</span> 
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