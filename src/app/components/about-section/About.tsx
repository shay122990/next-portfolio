import Divider from '../divider/Divider';
import Image from 'next/image';

const About = () => {
  return (
    <section className="w-full flex flex-col items-center lg:px-10 px-4">
      <Divider text="About Me" id="about" />
      <article className="w-full flex flex-col lg:flex-row text-center items-center justify-between gap-6 lg:px-20 px-6 py-20 rounded-lg bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 dark:from-[#1a1a1a] dark:via-[#222] dark:to-[#1a1a1a] shadow-lg relative overflow-hidden">
        <div className="relative w-60 h-60 lg:w-96 lg:h-96 flex flex-wrap justify-center items-center gap-4">
          <div className="absolute top-0 left-0 rotate-[-10deg] shadow-xl">
            <Image
              src="/images/hero-image.jpg"
              alt="Polaroid 1"
              width={120}
              height={120}
              className="w-24 h-24 lg:w-44 lg:h-40 object-cover rounded-md border-4 border-white shadow-lg"
            />
          </div>
          <div className="absolute top-10 right-0 rotate-6 shadow-xl">
            <Image
              src="/images/hero-image.jpg"
              alt="Polaroid 2"
              width={120}
              height={120}
              className="w-24 h-24 lg:w-40 lg:h-40 object-cover rounded-md border-4 border-white shadow-lg"
            />
          </div>
          <div className="absolute bottom-0 left-8 rotate-[15deg] shadow-xl">
            <Image
              src="/images/hero-image.jpg"
              alt="Polaroid 3"
              width={120}
              height={120}
              className="w-24 h-24 lg:w-52 lg:h-52 object-cover rounded-md border-4 border-white shadow-lg"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4 md:px-10 text-sm lg:text-base text-gray-900 dark:text-gray-200 motion-safe:animate-fadeIn">
          <p className="leading-relaxed">
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent dark:from-green-400 dark:to-blue-400">
              Hey there, I’m Shay,
            </span>
            <br />
            <span className="border-b-2 border-green-500 dark:border-green-400">
              a web developer who’s all about turning cool designs into seamless, functional websites.
            </span>  
            <br />
            I thrive on building with 
            <span className="text-blue-600 dark:text-green-400 font-semibold"> React </span> 
            and 
            <span className="text-blue-700 dark:text-blue-400 font-semibold"> Next.js</span>, 
            making sure every site I touch is optimized for performance, SEO, and accessibility.
            <br />
            <span className="dark:drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
              Through passion projects and constant learning, I’ve nailed the art of crafting high-performance sites that don’t just meet standards — they stand out.
            </span>
            <br />
            <span className="italic text-lg">Clean code? That’s my jam.</span> And nothing beats the buzz of bringing ideas to life.  
            <br />
            If you’re looking for someone who’s passionate, dedicated, and ready to tackle your next project,  
            <span className="text-green-600 dark:text-green-400 font-bold"> let’s chat! </span>  
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;