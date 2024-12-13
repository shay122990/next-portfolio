import Divider from '../divider/Divider';
import Image from 'next/image';

const About = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <Divider text="About Me" id="about" />
      <article className="w-full flex flex-col lg:flex-row text-center items-center justify-between px-1 lg:px-28 gap-2">
        <Image
          src="/images/hero-image.jpg"
          alt="Profile Picture"
          width={200}
          height={200}
          className="w-40 h-40 lg:h-80 lg:w-80 object-cover rounded-sm"
          priority
        />
        <div className="w-full lg:w-1/2 px-2 md:px-10 text-sm lg:text-base lg:text-left">
          <p>
            Hi, I’m Shay,
            <br />
            a passionate Web Developer with a knack for transforming designs into seamless, functional websites.
            <br />
            I specialize in building with React and Next.js, focusing on optimization, performance, SEO, and accessibility to create impactful user experiences. 
            <br />
            Through personal projects and hands-on learning, I’ve honed my ability to craft responsive, high-performance websites that meet modern web standards. I’m driven by a love for clean code and the satisfaction of delivering exceptional solutions that bring ideas to life.
            <br />
            I’m always eager to connect with like-minded professionals and collaborate on projects that push the boundaries of web development.
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
