import React from "react";
import  { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Import the desired effect CSS
import { FaGithub } from "react-icons/fa";

const Project = ({ title, description, image, githubLink, liveDemoLink }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-lg mb-4">
      <div className="image-container mb-1">
        <a href={liveDemoLink || githubLink} target="_blank" rel="noopener noreferrer">
          <LazyLoadImage
            effect="blur" // Specify the desired effect
            height={200} // Set the height for the placeholder
            src={image}
            alt={title}
            className="w-full h-40 object-cover"
          />
        </a>
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="mt-8 flex flex-row">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github text-2xl text-gray-900 hover:text-gray-900">
            click to see source code
          </i>
        </a>
      </div>
      <div className="flex space-x-4">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <i className="fa-github text-2xl text-gray-900 hover:text-gray-900">
            <FaGithub className="text-5xl text-black-900 hover:text-blue-800" />
          </i>
        </a>
        <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
          <i className="VscOpenPreview text-2xl text-gray-900 hover:text-gray-900"></i>
        </a>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const projects = [
    {
      title: "FoodyZone Web App",
      description: "React js, styled components, Api calling, React Hooks",
      image: "/images/foodyz.png",
      githubLink: "https://github.com/ImtinanFakhar",
      liveDemoLink:
        "https://imtinanfakhar.github.io/Amazon-landing-page-clone/",
    },
    {
      title: "React-Dice-Game",
      description: "React js, React Hooks",
      image: "/images/dicegame.png",
      githubLink: "https://github.com/ImtinanFakhar/FoodyZone-React-PJ",
      liveDemoLink: "https://github.com/ImtinanFakhar",
    },
    {
      title: "Pentest-Shinobi",
      description: "React js, React Hooks, TailwindCSS",
      image: "/images/pt.png",
      githubLink: "https://github.com/ImtinanFakhar",
      liveDemoLink: "https://github.com/ImtinanFakhar",
    },
    {
      title: "VanLife#",
      description: "React js, React Hooks, React Router, firbase",
      image: "/images/vanlife.png",
      githubLink: "https://github.com/ImtinanFakhar",
      liveDemoLink: "https://github.com/ImtinanFakhar",
    },
    {
      title: "MemeGenerator",
      description: "React js, React Hooks,",
      image: "/images/memegn.png",
      githubLink: "https://github.com/ImtinanFakhar",
      liveDemoLink: "https://github.com/ImtinanFakhar",
    },
    {
      title: "Amazon Home Page Clone",
      description: "Html CSS JavaScript",
      image: "/images/amazon.png",
      githubLink: "https://github.com/ImtinanFakhar",
      liveDemoLink: "https://github.com/ImtinanFakhar",
    },
    {
      title: "Single-page-coffee-menu",
      description: "Html CSS",
      image: "/images/coffee.png",
      githubLink: "https://github.com/ImtinanFakhar",
      liveDemoLink: "https://github.com/ImtinanFakhar",
    },
    {
      title: "Landing Page",
      description: "Html CSS",
      image: "/images/landingpagebasic.png",
      githubLink: "https://github.com/ImtinanFakhar",
      liveDemoLink: "https://github.com/ImtinanFakhar",
    },
    {
      title: "DropDown Menu with Javascript",
      description: "Html CSS JavaScript",
      image: "/images/dpdown.png",
      githubLink: "https://github.com/ImtinanFakhar",
      liveDemoLink: "https://github.com/ImtinanFakhar",
    },
    {
      title: "FreeCodeCamp Survey-form",
      description: "Html CSS",
      image: "/images/suveyform.png",
      githubLink: "https://github.com/ImtinanFakhar",
      liveDemoLink: "https://github.com/ImtinanFakhar",
    },
  ];

  const githubLinkForPage = "https://github.com/ImtinanFakhar";

  return (
    <div className="container mx-auto py-auto">
      <h1 className="text-3xl pt-4 font-semibold mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
