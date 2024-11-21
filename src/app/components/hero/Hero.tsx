"use client"
import { motion } from 'framer-motion';
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-row lg:flex-row justify-between items-center bg-gradient-to-br from-blue-700 to-teal-400 w-full h-80 lg:h-[35rem] px-4 lg:px-20 overflow-visible mt-0 lg:mt-8">
      <motion.h1
        className="text-white text-sm sm:text-xl lg:text-4xl font-semibold lg:w-1/2 lg:text-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Hi, I&apos;m Shay... <br />A React developer in Dubai
      </motion.h1>
      
      <motion.div
        className="mt-0 lg:mt-32"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Image
          src="/images/hero-image.jpg"
          alt="developer image"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg shadow-pink-400/50 hero-image"
        />
      </motion.div>
    </div>
  );
}
