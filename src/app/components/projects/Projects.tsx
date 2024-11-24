"use client"
import { motion } from "framer-motion";
import Divider from "../divider/Divider";
import PolaroidCard from "../polaroid-card/Polaroid-Card";

const projects = [
  {
    imageSrc: "/images/hero-image.jpg",
    liveLink: "https://example.com",
    githubLink: "https://github.com/username/project1",
    altText: "Project 1",
    projectName: "Project One",
  },
  {
    imageSrc: "/images/hero-image.jpg",
    liveLink: "https://example.com",
    githubLink: "https://github.com/username/project2",
    altText: "Project 2",
    projectName: "Project Two",
  },
  {
    imageSrc: "/images/hero-image.jpg",
    liveLink: "https://example.com",
    githubLink: "https://github.com/username/project3",
    altText: "Project 3",
    projectName: "Project Three",
  },
  {
    imageSrc: "/images/hero-image.jpg",
    liveLink: "https://example.com",
    githubLink: "https://github.com/username/project4",
    altText: "Project 4",
    projectName: "Project Four",
  },
  {
    imageSrc: "/images/hero-image.jpg",
    liveLink: "https://example.com",
    githubLink: "https://github.com/username/project5",
    altText: "Project 5",
    projectName: "Project Five",
  },
  {
    imageSrc: "/images/hero-image.jpg",
    liveLink: "https://example.com",
    githubLink: "https://github.com/username/project6",
    altText: "Project 6",
    projectName: "Project Six",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 }, 
  visible: { opacity: 1, y: 0 }, 
};

export default function Projects() {
  return (
    <section className="w-full py-10">
      <Divider text="Projects" id="projects" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <PolaroidCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
