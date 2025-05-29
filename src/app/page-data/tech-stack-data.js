import {
  FaHtml5,
  FaReact,
  FaProjectDiagram,
  FaRocket,
  FaFigma,
  FaMobileAlt,
  FaCss3Alt,
  FaCloud,
  FaServer,
  FaWordpress,
  FaGitAlt,
} from "react-icons/fa";

const servicesData = {
  WebDevelopment: [
    {
      id: 1,
      title: "Core Web Technologies",
      paragraph:
        "Proficient in HTML5, CSS3, and JavaScript, with expertise in building semantic, accessible, and performance-optimized web applications.",
      Icon: FaHtml5,
    },
    {
      id: 2,
      title: "Frontend Frameworks",
      paragraph:
        "Experienced in React.js and Next.js for building dynamic, interactive user interfaces and server-side rendered applications.",
      Icon: FaReact,
    },
    {
      id: 3,
      title: "State Management",
      paragraph:
        "Skilled in managing state using Context API and Redux Toolkit to ensure scalability and maintainability of complex applications.",
      Icon: FaProjectDiagram,
    },
    {
      id: 4,
      title: "Performance Optimization",
      paragraph:
        "Achieved top scores in Google Lighthouse checks by implementing techniques such as code-splitting, lazy loading, and image optimization.",
      Icon: FaRocket,
    },
  ],
  Design: [
    {
      id: 1,
      title: "Design Tools",
      paragraph:
        "Proficient in Figma for creating prototypes and wireframes, ensuring seamless transition from design to development.",
      Icon: FaFigma,
    },
    {
      id: 2,
      title: "Responsive Design",
      paragraph:
        "Expert in responsive design principles, delivering consistent user experiences across all devices and screen sizes.",
      Icon: FaMobileAlt,
    },
    {
      id: 3,
      title: "CSS Libraries & Preprocessors",
      paragraph:
        "Experienced with popular CSS frameworks like Bootstrap, TailwindCSS, and preprocessors like SCSS to enhance styling workflows.",
      Icon: FaCss3Alt,
    },
  ],
  TechTools: [
    {
      id: 1,
      title: "Cloud & Deployment",
      paragraph:
        "Experienced in deploying applications using cloud services like Firebase, Vercel, and Netlify, and configuring local servers for testing.",
      Icon: FaCloud,
    },
    {
      id: 2,
      title: "Backend Integration",
      paragraph:
        "Integrated backend services using Firebase for authentication, database management, and hosting dynamic web applications.",
      Icon: FaServer,
    },
    {
      id: 3,
      title: "WordPress Development",
      paragraph:
        "Built and customized WordPress sites for clients, ensuring quick delivery and scalability.",
      Icon: FaWordpress,
    },
    {
      id: 4,
      title: "Version Control & Collaboration",
      paragraph:
        "Proficient in Git for version control, ensuring seamless team collaboration and efficient code management.",
      Icon: FaGitAlt,
    },
  ],
};

export default servicesData;
