import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Faraz. Nice to meet you. Have a look around.
            </p>
          </div>
          <div>
            <p>
              I am a dedicated and motivated BTech CSE student at Jamia Hamdard,
              proficient in C++, HTML, CSS, JS, ReactJS, Tailwind CSS,
              NodeJS, Express, MongoDB. With a strong technical foundation, I
              thrive on new challenges and projects, constantly seeking novel
              applications for my skills and knowledge. Fueled by creativity and
              innovation, my problem-solving approach drives me to develop web
              applications, explore cutting-edge technologies, and master new
              programming languages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
