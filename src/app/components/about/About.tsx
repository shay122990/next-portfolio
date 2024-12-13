import Divider from '../divider/Divider';
import Image from 'next/image';

const About = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <Divider text="About Me" id="about" />
      <article className="w-full px-1 flex flex-col lg:flex-row text-center items-center justify-center gap-6 lg:gap-40">
        <Image
          src="/images/hero-image.jpg"
          alt="Profile Picture"
          width={200}
          height={200}
          className="h-60 w-60 object-cover rounded-sm"
          priority
        />
        <div className="w-full lg:w-2/5 px-10 lg:text-left">
          <p>
            Hi, I’m Shay,
            <br />
            a passionate React Frontend Developer with a knack for transforming designs into seamless, functional websites.
            <br />
            I specialize in building with React and Next.js, focusing on optimization, performance, SEO, and accessibility to create impactful user experiences. 
            <br />
            Through personal projects and hands-on learning, I’ve honed my ability to craft responsive, high-performance websites that meet modern web standards. I’m driven by a love for clean code and the satisfaction of delivering exceptional solutions that bring ideas to life.
            <br />
            I’m always eager to connect with like-minded professionals and collaborate on projects that push the boundaries of web development. Let’s create something amazing together—reach out and let’s talk!
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
