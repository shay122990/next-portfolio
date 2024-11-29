import Divider from '../divider/Divider';
import Image from 'next/image';

const About = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <Divider text="About Me" id="about" />
      <article className="w-full px-1 flex flex-row text-center items-center justify-center gap-96">
        <Image
          src="/images/logo.gif"
          alt="Profile Picture"
          width={200}
          height={200}
          className="h-60 w-60 object-cover rounded-sm"
        />
        <div className='w-2/5'>
        <h2>So, who am I?</h2>
        <p>
          <br />
          I&apos;ve always been drawn to the magic of technology and
          design coming together. That&apos;s what led me to become a developer.
          <br />
          With a strong handle on frontend technologies, I&apos;m here to bring your
          vision to life, blending beautiful design with seamless functionality,
          speed, compatibility, and accessibility.
          <br />I love keeping up with the latest trends in development and
          design so I can always deliver the best for your company and personal
          projects.
        </p>
        </div>
      </article>
    </section>
  );
};

export default About;
