import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import Footer from "./Footer.jsx";
import ReactTyped from "react-typed";

function Home() {
  return (
    <>
      <header className="bg-blue-900 text-white py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Hi, My name is Imtinan. I'm a{" "}
          <ReactTyped
            strings={[
              '<span class="text-red-500">Developer</span>',
              '<span class="text-blue-500">Writer</span>',
              '<span class="text-green-500">Student</span>',
            ]}
            typeSpeed={150}
            loop
            backSpeed={50}
            cursorChar=""
            showCursor={true}
          />
        </h1>
      </header>

      {/* Introduction */}
      <section className="container text-center md:container md:mx-auto px-10">
        <p className="text-xs font-bold md:text-xl text-gray-800 py-4">
          A jr-software developer with a passion for learning and creating.
        </p>
      <div className="flex justify-center items-center space-x-4 p-4">
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
        </div>
      </section>
     <section className="bg-white pt-8 pb-12">
        <div className="container text-2xl mx-auto">
        <div className="text-xl md:text-3xl font-semibold  text-center mb-4">
        <h2 className="text-4xl box-border border-2 border-indigo-600">Skills
          </h2>
        </div>
          <div className="text-center mt-4">
            <ol className="list-none list-inside">
              <li className="mb-4">
                <h2 className="text-4xl font-semibold mb-2">Front-End</h2>
                <span className="text-gray-700">
                  ReactJS, Redux, HTML, CSS, React Native, NPM,
                  BootStrap, MaterialUI, TailwindCSS, StyledComponents,
                  WordPress
                </span>
              </li>
            </ol>
            <ol className="list-none list-inside">
              <li className="mb-4">
                <h2 className="text-4xl font-semibold">Back-End</h2>
                <span className="text-gray-700">Nodejs, MSSQL, MongoDB</span>
              </li>
            </ol>
          </div>
         </div>
          <h2 className="text-3xl md:text-3xl font-semibold text-center mb-4">
            Languages
          </h2>
          <div className="text-center text-2xl">
            <ol className="list-none list-inside">
              <li className="mb-4">
                <h2 className="text-xl font-semibold"></h2>
                <span className="text-gray-700">
                  JavaScript, Python, Kotlin
                </span>
              </li>
            </ol>
          </div>
      </section>
      <section>
      <Footer />
      </section>
      
   </>
  );
}

export default Home;
