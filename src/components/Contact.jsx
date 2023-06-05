import React from "react";
import { FcCollaboration } from "react-icons/fc";


const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form action="https://getform.io/f/d3c70aaa-9bd7-4fa1-9732-f7160ce5eaec" method="POST" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            \\ Submit the form below or send me an email -
            mohmdfarazali@gmail.com
          </p>
        </div>
        <input className="bg-[#ccd6f6] p-2 rounded" type="text" name="name" placeholder="Name" required/>
        <input className="my-4 p-2 bg-[#ccd6f6] rounded" type="email" name="email" placeholder="Email" required/>
        <textarea name="message" className="bg-[#ccd6f6] p-2 rounded" rows="10" placeholder="Message" required></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center duration-500'>Let's Collaborate<FcCollaboration className="ml-2" size={20}/></button>
      </form>
    </div>
  );
};

export default Contact;
