import Typewriter from "typewriter-effect";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

import { SiVisualstudiocode } from "react-icons/si";
import { SiLinktree } from "react-icons/si";
import { FaNpm } from "react-icons/fa";






export default function Skills(){
    return (
        <section
        className="text-gray-400 body-font bg-gray-700"
        style={{
          background:
            "url('https://www.wallpapertip.com/wmimgs/83-838381_html-code-wallpaper.jpg')",
        }}
      >
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-indigo-400">
                Skills and Abilities,Technologies I Use
              </h1>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-black font-semibold">
              I have honed a variety of skills and abilities that enable me to
              build dynamic and user-friendly web applications. Utilizing
              technologies such as HTML, CSS, JavaScript, React, and Next.js, I
              create responsive designs and efficient code solutions. My
              expertise also extends to backend development with Node.js and
              Express, ensuring full-stack proficiency.
            </p>
          </div>
        </div>

        {/*Development tools Section (01)*/}

        <div className="container px-2 py-4 mx-auto flex-wrap flex justify-center items-center space-x-6 text-2xl">
          {/*Typewriter Effect */}
          <h1 className="bg-gradient-to-r from-blue-500 to-green-500 title-font font-bold sm:text text-4xl twxt-3xl mb-4 text-black flex items-center justify-center">
            <Typewriter
              options={{
                strings: ["My Tech Stack"],

                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          {/*Icons*/}
          <div className="flex flex-col items-center bg-gray-500 border-2 border-yellow-400 p-4 transition-transform duration-300 ease-in-out hover:scale-110">
            <FaHtml5 className="text-orange-600 text-6xl" />
            <span className="mt-2 text-lg text-black font-bold">HTML</span>
          </div>
          <div className="flex flex-col items-center bg-gray-500 border-2 border-yellow-400 p-4 transition-transform duration-300 ease-in-out hover:scale-110">
            <FaCss3Alt className="text-blue-500 text-6xl" />
            <span className="mt-2 text-lg text-black font-bold">CSS</span>
          </div>
          <div className="flex flex-col items-center bg-gray-500 border-2 border-yellow-400 p-4 transition-transform duration-300 ease-in-out hover:scale-110">
            <IoLogoJavascript className="text-yellow-500 text-6xl" />
            <span className="mt-2 text-lg text-black font-bold">
              Java Script
            </span>
          </div>
          <div className="flex flex-col items-center bg-gray-500 border-2 border-yellow-400 p-4 transition-transform duration-300 ease-in-out hover:scale-110">
            <SiTypescript className="text-blue-600 text-6xl" />
            <span className="mt-2 text-lg text-black font-bold">
              TypeScript
            </span>
          </div>
          <div className="flex flex-col items-center bg-gray-500 border-2 border-yellow-400 p-4 transition-transform duration-300 ease-in-out hover:scale-110">
            <SiNextdotjs className="text-gray-800 text-6xl" />
            <span className="mt-2 text-lg text-black font-bold">Next.Js</span>
          </div>
        </div>

        {/*Development tools Section (02)*/}
        <div className="container px-2 py-8 mx-auto flex-wrap flex justify-center items-center space-x-6 text-2xl">
          {/*Icons*/}
          <div className="flex flex-col items-center bg-gray-500 border-2 border-yellow-400 p-4 transition-transform duration-300 ease-in-out hover:scale-110">
            <SiVisualstudiocode className="text-sky-500 text-6xl" />
            <span className="mt-2 text-lg text-black font-bold">Vs Code</span>
          </div>
          <div className="flex flex-col items-center bg-gray-500 border-2 border-yellow-400 p-4 transition-transform duration-300 ease-in-out hover:scale-110">
            <SiLinktree className="text-green-500 text-6xl" />
            <span className="mt-2 text-lg text-black font-bold">Link Tree</span>
          </div>
          <div className="flex flex-col items-center bg-gray-500 border-2 border-yellow-400 p-4 transition-transform duration-300 ease-in-out hover:scale-110">
            <FaNpm className="text-sky-500 text-6xl" />
            <span className="mt-2 text-lg text-black font-bold">Npm</span>
          </div>
          {/*Typewriter Effect */}
          <h1 className="bg-gradient-to-r from-blue-500 to-green-500 title-font font-bold sm:text text-4xl twxt-3xl mb-4 text-black flex items-center justify-center">
            <Typewriter
              options={{
                strings: ["Development Tools"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </section>
    )
}