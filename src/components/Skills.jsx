import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Cpp from "../assets/cpp.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* container  */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">\\ These are the technologies I work on</p>
        </div>
        {/* container for all the skills */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {/* particular container for image and text
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="html" />
            <p className="py-4">HTML</p>
          </div>
            */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md border border-blue-700">
            <img className="w-20 mx-auto pt-2" src={Cpp} alt="cpp" />
            <p className="py-4">C++</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md border border-orange-400">
            <img className="w-20 mx-auto pt-2" src={HTML} alt="html" />
            <p className="py-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md border border-blue-400">
            <img className="w-20 mx-auto pt-2" src={CSS} alt="html" />
            <p className="py-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md border border-yellow-400">
            <img className="w-20 mx-auto pt-2" src={JavaScript} alt="html" />
            <p className="py-4">JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md border border-cyan-400">
            <img className="w-20 mx-auto pt-2" src={ReactImg} alt="html" />
            <p className="py-4">ReactJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md border border-green-500">
            <img className="w-20 mx-auto pt-2" src={Node} alt="html" />
            <p className="py-4">NodeJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md border border-green-400">
            <img className="w-20 mx-auto pt-2" src={Mongo} alt="html" />
            <p className="py-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md border border-cyan-600">
            <img className="w-20 mx-auto pt-2" src={Tailwind} alt="html" />
            <p className="py-4">Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
