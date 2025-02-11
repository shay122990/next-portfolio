"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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
        <div
          style={{
            backgroundColor: "#EEEEEE",
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23c6c6c6' fill-opacity='0.13'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.13'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
          className="relative w-100 bg-white p-4 border-4 border-white rounded-lg shadow-lg transform hover:rotate-2 transition-transform duration-300 ease-in-out max-w-md mx-auto"
        >
          <Image
            src="/images/hero-image.jpg"
            alt="developer image"
            width={500}
            height={500}
            className=" hero-image"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}