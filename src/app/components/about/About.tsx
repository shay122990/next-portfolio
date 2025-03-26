import Divider from '../divider/Divider';
import Image from 'next/image';

const About = () => {
  return (
    <section className="w-full flex flex-col items-center lg:px-10 px-4">
      <Divider text="About Me" id="about" />
      <article className="w-full flex flex-col lg:flex-row text-center items-center justify-between gap-2 lg:px-20 px-4 py-20 bg-black bg-opacity-20 rounded">
        <Image
          src="/images/hero-image.jpg"
          alt="Profile Picture"
          width={200}
          height={200}
          className="w-40 h-40 lg:h-80 lg:w-80 object-cover rounded border-[4px] border-green-400"
          priority
        />
        <div className="w-full lg:w-1/2 px-2 md:px-10 text-sm lg:text-base lg:text-left ">
          <p>
            Hey there, I’m Shay,  
            <br />
            a web developer who’s all about turning cool designs into seamless, functional websites.  
            <br />
            I thrive on building with React and Next.js, making sure every site I touch is optimized for performance, SEO, and accessibility — because great user experiences are non-negotiable.  
            <br />
            Through passion projects and constant learning, I’ve nailed the art of crafting responsive, high-performance sites that don’t just meet standards — they stand out. Clean code? That’s my jam. And nothing beats the buzz of bringing ideas to life.  
            <br />
            If you’re looking for someone who’s passionate, dedicated, and ready to tackle your next project or bring fresh energy to your team, I’d love to chat. Let’s make something amazing together!  
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
