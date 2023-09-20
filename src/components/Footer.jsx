import React from 'react'
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="flex flex-col justify-center items-center md:items-start">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black-500">&lt;ICODER/&gt;
        </h1>
        </div>
       
        <section className="flex justify-center items-center space-x-4 p-8">
        <a
          href="https://www.linkedin.com/in/imtinan-fakhar-60a5171b8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-5xl text-black-600 hover:text-blue-800" />
        </a>
        <a href="mailto:imtinanfakhar879@gmail.com">
          <FaEnvelope className="text-5xl text-black-600 hover:text-blue-800" />
        </a>
        <a href="https://github.com/ImtinanFakhar" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-5xl text-black-600 hover:text-blue-800" />
        </a>
      </section>
        <div className="mt-6 md:mt-0 flex flex-col items-center md:items-start">
          <h2 className="text-xl font-semibold mb-4 ">Follow Me</h2>
          <div className="flex space-x-4">
            
            <a href="https://www.upwork.com/freelancers/~011b0117f07679cb68" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-2xl hover:text-green-400 transition duration-300">Upwork</i>
              
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer