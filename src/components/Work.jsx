import React from "react";
import ThreeDCal from "../assets/projects/3dcal.jpg";
import Gify from "../assets/projects/gify.jpg";

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

        {/* grid/card container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Gify})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 z-10">
              <span className="text-2xl font-bold text-white tracking-wider">
                Gify - Generate Gifs
              </span>
              <div className="pt-8 text-center">
                <a href="https://mzbu95.csb.app/">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
                <a href="https://github.com/mohmdfarazali/Gify">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ThreeDCal})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 z-10">
              <span className="text-2xl font-bold text-white tracking-wider">
                3D Calculator
              </span>
              <div className="pt-8 text-center">
                <a href="https://mohmdfarazali.github.io/3D-Calculator/">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
                <a href="https://github.com/mohmdfarazali/3D-Calculator">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
