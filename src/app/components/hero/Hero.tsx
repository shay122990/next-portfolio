import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-row lg:flex-row justify-between items-center bg-gradient-to-br from-blue-700 to-teal-400 w-full h-80 lg:h-[35rem] px-4 lg:px-20 overflow-visible mt-0 lg:mt-8">
      <h1 className="text-white text-sm sm:text-xl lg:text-4xl font-semibold lg:w-1/2 lg:text-left">
        Hi, I&apos;m Shay... <br />A React developer in Dubai
      </h1>
      <div className="mt-0 lg:mt-32">
        <Image
          src="/images/hero-image.jpg"
          alt="developer image"
          width={200} 
          height={200} 
          className="rounded-2xl shadow-lg shadow-pink-400/50  md:w-[280px] md:h-[300px] lg:w-[400px] lg:h-[500px]"
        />
      </div>
    </div>
  );
}
