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
            I work as an Associate Data Engineer 🧑🏻‍💻 at Hexaview Technologies Inc. I thrive on turning complex data into clear, actionable insights using MS SQL Server and Power BI 📊. My goal is to empower businesses with the data they need to make informed decisions and achieve their goals 🚀. Let's connect and explore how we can drive success together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
