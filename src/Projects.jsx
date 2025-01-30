import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer"; // For scroll animations
import Dhonbez from "./images/dhonbez.png";
import Lethree from "./images/lethree.png";
import MNU from "./images/MNU.png";
import Securebag from "./images/securebag.png";
import Som from "./images/som.png";
import { DiLaravel, DiReact, DiBootstrap, DiHtml5, DiMysql, DiPhp, DiWordpress } from "react-icons/di";
import Tailwind from "./images/Tailwind.png";
import AlpineJS from "./images/Alpine-JS.png";
import Kirby from "./images/Kirby.png";
import Filament from "./images/Filament-small.png";

const Projects = () => {
  const projects = [
    {
      title: "Lethree Maldives",
      description:
        "Developed a dynamic website featuring travel packages with content managed through Filament. Collaborated on a responsive application using Bootstrap, Alpine.js, Laravel, and Filament.",
      image: Lethree,
      technologies: [
        <DiLaravel className="text-red-600" />,
        <DiBootstrap className="text-purple-600" />,
        <img src={AlpineJS} alt="AlpineJS" className="w-6 h-6" />,
        <img src={Filament} alt="Filament" className="w-6 h-6" />,
      ],
      link: "https://lethree.com/",
    },
    {
      title: "MNU VLAS",
      description:
        "Created an internal attendance management system for MNU to track teacher attendance, task completion, and salary calculations. Leveraged Laravel and Filament for efficient administrative workflows.",
      image: MNU,
      technologies: [
        <DiLaravel className="text-red-600" />,
        <img src={Filament} alt="Filament" className="w-6 h-6" />,
      ],
      link: null,
    },
    {
      title: "Donbez",
      description:
        "Developed a robust content management system using PHP and Kirby CMS to showcase Donbez's portfolio in resort and commercial construction.",
      image: Dhonbez,
      technologies: [
        <DiPhp className="text-indigo-600" />,
        <img src={Kirby} alt="Kirby" className="w-6 h-6" />,
      ],
      link: "https://donbez.com/",
    },
    {
      title: "Secure Bag Maldives",
      description:
        "Built a platform to promote sustainability and environmental awareness. Developed contest features using PHP and Kirby CMS to encourage youth participation in environmental projects.",
      image: Securebag,
      technologies: [
        <DiPhp className="text-indigo-600" />,
        <img src={Kirby} alt="Kirby" className="w-6 h-6" />,
      ],
      link: "https://securebag.com.mv/",
    },
    {
      title: "Souls of Maldives",
      description:
        "Designed and implemented a luxury travel WordPress website. Created dynamic content sections for destinations and resorts with responsive design for seamless navigation.",
      image: Som,
      technologies: [<DiWordpress className="text-blue-700" />],
      link: "https://som.travel/",
    },
  ];

  return (
    <div className="max-w-[1300px] mx-auto p-6 space-y-12" id="projects">
      {/* Heading and Subheading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl mb-4 text-white">Projects</h2>
        <p className="text-gray-300 mt-4">
          A selection of projects developed during my role as a Web Developer at{" "}
          <span className="text-indigo-400 font-semibold">Maldicore Group Pvt. Ltd.</span>
        </p>
      </div>

      {projects.map((project, index) => {
        const { ref, inView } = useInView({
          threshold: 0.1, // Trigger animation when 10% of the element is visible
          triggerOnce: true, // Animation happens only once
        });

        return (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-8 items-center ${
              index % 2 === 0 ? "" : "md:grid-cols-2-reverse"
            }`}
            ref={ref}
          >
            {/* Image Section with Glowing Border */}
            <div
              className={`flex justify-center items-center transition duration-500 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Wrapper for Glow Effect */}
              <div className="relative">
                {/* Glowing Effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-md opacity-70 group-hover:opacity-100 transition duration-300"></div>
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative rounded-lg shadow-lg w-full max-w-[500px] bg-white"
                />
              </div>
            </div>

            {/* Text Section */}
            <div
              className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 transition duration-500 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-300 my-4">{project.description}</p>
              <div className="flex flex-wrap gap-4 text-4xl justify-start">
                {project.technologies.map((tech, techIndex) => (
                  <div key={techIndex}>{tech}</div>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-indigo-400 hover:text-indigo-600 underline transition duration-300"
                >
                  Visit Website <FaExternalLinkAlt className="ml-2" />
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
