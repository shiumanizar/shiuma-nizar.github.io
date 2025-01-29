import React from 'react';
import AlpineJS from "./images/Alpine-JS.png";
import Bootstrap from "./images/Bootstrap.png";
import CSharp from "./images/CSharp.png";
import CPlusPlus from "./images/C++.png";
import Filament from "./images/Filament.png";
import HTML from "./images/HTML.png";
import Java from "./images/Java.png";
import jQuery from "./images/jQuery.png";
import Kirby from "./images/Kirby.png";
import Laravel from "./images/Laravel.png";
import MySQL from "./images/MySQL.png";
import PHP from "./images/PHP.png";
import Python from "./images/Python.png";
import R from "./images/R.png";
import Tailwind from "./images/Tailwind.png";
import WordPress from "./images/WordPress.png";
import ReactImg from "./images/React.png";

const Skills = () => {
  return (
    <div className="text-gray-400 mx-auto max-w-[1200px] mt-8" id="skills">
      <h2 className="text-4xl mb-8 text-white text-center ">
        My Tech Stack
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
        {/* Laravel */}
        <div className="flex flex-col items-center">
          <img src={Laravel} alt="Laravel" className="w-[60px] md:w-[80px]" />
          <p className="mt-2">Laravel</p>
        </div>
        {/* Tailwind */}
        <div className="flex flex-col items-center">
          <img src={Tailwind} alt="TailwindCSS" className="w-[60px] md:w-[80px]" />
          <p className="mt-2">TailwindCSS</p>
        </div>
        {/* React */}
        <div className="flex flex-col items-center">
          <img src={ReactImg} alt="React" className="w-[60px] md:w-[80px]" />
          <p className="mt-2">React</p>
        </div>
        {/* Bootstrap */}
        <div className="flex flex-col items-center">
          <img src={Bootstrap} alt="Bootstrap" className="w-[60px] md:w-[80px]" />
          <p className="mt-2">Bootstrap</p>
        </div>
        {/* AlpineJS */}
        <div className="flex flex-col items-center">
          <img src={AlpineJS} alt="AlpineJS" className="w-[60px] md:w-[80px]" />
          <p className="mt-2">AlpineJS</p>
        </div>
        {/* WordPress */}
        <div className="flex flex-col items-center">
          <img src={WordPress} alt="WordPress" className="w-[60px] md:w-[80px]" />
          <p className="mt-2">WordPress</p>
        </div>
        {/* Filament */}
        <div className="flex flex-col items-center">
          <img src={Filament} alt="Filament" className="w-[60px] md:w-[80px]" />
          <p className="mt-2">Filament</p>
        </div>
        {/* PHP */}
        <div className="flex flex-col items-center">
          <img src={PHP} alt="PHP" className="w-[60px] md:w-[80px]" />
          <p className="mt-2">PHP</p>
        </div>
        {/* MySQL */}
        <div className="flex flex-col items-center">
          <img src={MySQL} alt="MySQL" className="w-[60px] md:w-[80px]" />
          <p className="mt-2">MySQL</p>
        </div>
        {/* HTML */}
        <div className="flex flex-col items-center">
          <img src={HTML} alt="HTML" className="w-[60px] md:w-[80px]" />
          <p className="mt-2">HTML</p>
        </div>
        {/* jQuery */}
        <div className="flex flex-col items-center">
          <img src={jQuery} alt="jQuery" className="w-[60px] md:w-[80px]" />
          <p className="mt-2">jQuery</p>
        </div>
        {/* Kirby */}
        <div className="flex flex-col items-center">
          <img src={Kirby} alt="Kirby" className="w-[60px] md:w-[80px]" />
          <p className="mt-2">Kirby</p>
        </div>
        {/* Java */}
        <div className="flex flex-col items-center">
          <img src={Java} alt="Java" className="w-[60px] md:w-[80px]" />
          <p className="mt-2">Java</p>
        </div>
        {/* Python */}
        <div className="flex flex-col items-center">
          <img src={Python} alt="Python" className="w-[60px] md:w-[80px]" />
          <p className="mt-2">Python</p>
        </div>
        {/* C# */}
        <div className="flex flex-col items-center">
          <img src={CSharp} alt="C#" className="w-[60px] md:w-[80px]" />
          <p className="mt-2">C#</p>
        </div>
        {/* C++ */}
        <div className="flex flex-col items-center">
          <img src={CPlusPlus} alt="C++" className="w-[60px] md:w-[80px]" />
          <p className="mt-2">C++</p>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
