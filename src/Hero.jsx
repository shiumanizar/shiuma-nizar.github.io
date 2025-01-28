import { useEffect, useState } from "react";
import HeroPic from "./images/hero-image.jpeg";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const [name, setName] = useState(""); // Typing animation state
  const fullName = "Shiuma Nizar,"; // Full name for typing animation
  const typingSpeed = 100; // Typing speed in milliseconds

  useEffect(() => {
    let currentIndex = 0;

    // Typing animation logic
    const typeInterval = setInterval(() => {
      if (currentIndex < fullName.length) {
        setName(fullName.slice(0, currentIndex + 1)); // Update name incrementally
        currentIndex++;
      } else {
        clearInterval(typeInterval); // Stop the interval when done
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="flex flex-col lg:flex-row animate-fadeIn justify-around items-center p-10 pt-20 space-y-15 lg:space-y-0 lg:space-x-10 text-white pt-15 ">
  {/* Left Section */}
  <div className="flex-1 lg:w-1/3">
    <p className="text-4xl mb-5 text-slate-300">Hi, I'm</p>
    <h1 className="text-6xl">{name}</h1> {/* Typing animation for name */}
    <hr />
    <p className="mt-10 text-xl text-slate-300 font-sans">
      a Software Engineer with a keen interest and experience in web
      development. I am passionate about finding technical solutions to
      real-life issues and creating seamless, user-focused digital
      experiences using modern tools and technologies.
    </p>
  </div>

  {/* Middle Section */}
  <div className="flex-1 lg:w-1/3">
    <img
      src={HeroPic}
      alt="Shiuma's Profile"
      width={250}
      height={250}
      className="rounded-full w-full border-8 border-white"
    />
  </div>

  {/* Right Section */}
  <div className="flex-1 lg:w-1/3">
    <p className="text-4xl mb-4">Find me on Social Media</p>
    <p className="mt-10 text-xl text-slate-300 font-sans">
      I’m always exploring new tools and ideas to grow as a developer and
      make an impact through my work.
      <br />
      Let’s connect!
    </p>
    <div className="mt-10 flex items-center space-x-2">
      {/* LinkedIn Icon */}
      <a
        href="https://www.linkedin.com/in/shiuma-nizar"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 text-5xl"
      >
        <FaLinkedin />
      </a>

      {/* LinkedIn Username */}
      <a
        href="https://www.linkedin.com/in/shiuma-nizar"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 text-4xl font-semibold"
      >
        shiuma-nizar
      </a>
    </div>
  </div>
</section>

  );
};

export default Hero;
