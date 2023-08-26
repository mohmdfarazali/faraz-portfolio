import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
// import Node from "../assets/node.png";
import Cpp from "../assets/cpp.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import Nextjs from "../assets/nextjs.png";
import Firebase from "../assets/firebase.png";
import Github from "../assets/github.png";

const skillsData = [
  { name: "C++", src: Cpp, color: "border-blue-700", alt: "cpp" },
  { name: "HTML", src: HTML, color: "border-orange-400", alt: "html" },
  { name: "CSS", src: CSS, color: "border-blue-400", alt: "css" },
  { name: "JavaScript", src: JavaScript, color: "border-yellow-400", alt: "js" },
  { name: "ReactJS", src: ReactImg, color: "border-cyan-400", alt: "react" },
  { name: "Next.js", src: Nextjs, color: "border-white", alt: "nextjs" },
  { name: "Tailwind CSS", src: Tailwind, color: "border-cyan-600", alt: "tailwind" },
  // { name: "NodeJS", src: Node, color: "border-green-500", alt: "node" },
  { name: "MongoDB", src: Mongo, color: "border-green-400", alt: "mongo" },
  { name: "Firebase", src: Firebase, color: "border-yellow-600", alt: "firebase" },
  { name: "Git/GitHub", src: Github, color: "border-cyan-600", alt: "github" },
];

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">\\ These are the technologies I work on</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={`shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md border ${skill.color}`}
            >
              <img className="w-20 mx-auto pt-2" src={skill.src} alt={skill.alt} />
              <p className="py-4">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
