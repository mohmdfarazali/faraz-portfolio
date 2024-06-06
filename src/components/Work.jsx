import React from "react";
import ThreeDCal from "../assets/projects/3dcal.jpg";
import SwiftChat from "../assets/projects/SwiftChat.png";
import TaskSavvy from "../assets/projects/TaskSavvy.png";
import Imaginify from "../assets/projects/Imaginify.png";

const projects = [
  {
    name: "Imaginify 🌠",
    image: Imaginify,
    liveLink: "https://imaginify-tawny.vercel.app/",
    codeLink: "https://github.com/mohmdfarazali/imaginify",
  },
  {
    name: "Swift Chat 💬",
    image: SwiftChat,
    liveLink: "https://swift-chat-inky.vercel.app/login",
    codeLink: "https://github.com/mohmdfarazali/swift-chat",
  },
  {
    name: "Task Savvy 📝",
    image: TaskSavvy,
    liveLink: "https://todo-nextjs-firebase-two.vercel.app/",
    codeLink: "https://github.com/mohmdfarazali/todo-nextjs-firebase",
  },
  {
    name: "3D Calculator",
    image: ThreeDCal,
    liveLink: "https://mohmdfarazali.github.io/3D-Calculator/",
    codeLink: "https://github.com/mohmdfarazali/3D-Calculator",
  },
  // Add more projects here if needed
];

const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">\\ Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${project.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 z-10">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {project.name}
                </span>
                <div className="pt-8 text-center">
                  <a href={project.liveLink}>
                    <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                      Live
                    </button>
                  </a>
                  <a href={project.codeLink}>
                    <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
