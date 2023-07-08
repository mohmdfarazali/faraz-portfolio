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
            I am a dedicated 4th-year BTECH CSE student at Jamia Hamdard, driven by a strong passion for software development. My expertise lies in C++ and Data Structures, and I am actively expanding my knowledge in areas such as Data Structures and Algorithms and SQL. I possess skills in ReactJS, HTML, CSS, and Next.js, which enable me to excel in frontend web development. With a solid understanding of Object-Oriented Programming principles, I can design efficient and scalable software solutions. I also have a strong foundation in computer science fundamentals, including knowledge of operating systems and database fundamentals, specifically SQL. As a proactive learner, I am committed to delivering high-quality software solutions and constantly seek opportunities for personal and professional growth in the field of software development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
