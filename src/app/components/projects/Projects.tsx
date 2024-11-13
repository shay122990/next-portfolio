import Divider from "../divider/Divider";
import PolaroidCard from "../polaroid-card/Polaroid-Card";

export default function Projects() {
  return (
    <section className="w-full py-10">
      <Divider text="Projects" id="projects" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <PolaroidCard
          imageSrc="/images/hero-image.jpg"
          liveLink="https://example.com"
          githubLink="https://github.com/username/project1"
          altText="Project 1"
          projectName="Project One"
        />
        <PolaroidCard
          imageSrc="/images/hero-image.jpg"
          liveLink="https://example.com"
          githubLink="https://github.com/username/project2"
          altText="Project 2"
          projectName="Project Two"
        />
        <PolaroidCard
          imageSrc="/images/hero-image.jpg"
          liveLink="https://example.com"
          githubLink="https://github.com/username/project3"
          altText="Project 3"
          projectName="Project Three"
        />
        <PolaroidCard
          imageSrc="/images/hero-image.jpg"
          liveLink="https://example.com"
          githubLink="https://github.com/username/project4"
          altText="Project 4"
          projectName="Project Four"
        />
        <PolaroidCard
          imageSrc="/images/hero-image.jpg"
          liveLink="https://example.com"
          githubLink="https://github.com/username/project5"
          altText="Project 5"
          projectName="Project Five"
        />
        <PolaroidCard
          imageSrc="/images/hero-image.jpg"
          liveLink="https://example.com"
          githubLink="https://github.com/username/project6"
          altText="Project 6"
          projectName="Project Six"
        />
      </div>
    </section>
  );
}
