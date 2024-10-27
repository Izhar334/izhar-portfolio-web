import Typewriter from "typewriter-effect";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

import { SiVisualstudiocode } from "react-icons/si";
import { SiLinktree } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <title>Izhar's Portfolio</title>

      {/*Hero section*/}
      <section
        className="text-gray-400 bg-gray-700 body-font"
        style={{
          background: "url('https://wallpaperaccess.com/full/5652002.png')",
        }}
      >
        <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
          {/*Image section*/}
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-4 object-cover object-center rounded-full"
            src="./images/me.jpg"
            alt="myPicture"
          />
          <div className="text-center lg:w-2/3 w-full">
            {/*Heading section*/}

            <h1 className="bg-gradient-to-r from-blue-500 to-green-500 title-font font-bold sm:text text-4xl twxt-3xl mb-4 text-black flex items-center justify-center">
              <Typewriter
                options={{
                  strings: [
                    " Hello..! I'm Izhar Ahmed",
                    "A Web Developer",
                    "A Freelance Designer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="text-black font-semibold leading-relaxed mb-0">
              I am a passionate web developer and freelance designer with a
              strong focus on creating visually appealing and user-friendly
              websites. My skills range from front-end development to graphic
              design, ensuring that every project I work on looks great and
              functions smoothly. I enjoy collaborating with clients to bring
              their ideas to life, whether it's crafting a modern website or
              designing captivating graphics. With a commitment to quality and
              creativity, I strive to deliver outstanding results that exceed
              expectations.
            </p>
          </div>
        </div>

        {/*Button section*/}
        <div className="flex w-full justify-center items-end">
          <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
            <label
              htmlFor="hero-field"
              className="leading-7 text-sm text-black font-semibold"
            >
              Newslatters
            </label>
            <input
              type="text"
              id="hero-field"
              name="hero-field"
              className="w-full bg-gray-900 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">
            Subscribe
          </button>
        </div>
      </section>
      {/*Skills section*/}
      <section className="text-gray-400 bg-gray-700 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap -m-6 bg-gradient-to-r from-indigo-300 to-gray-900">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-125"
                  src="https://static.javatpoint.com/blog/images/student-management-system.png"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font bg-sky-500 font-medium text-black mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-bold text-black mb-3">
                    Student Management System
                  </h1>
                  <p className="leading-relaxed mb-3 text-white">
                    The student management system project streamlines
                    administrative tasks by providing an efficient platform to
                    manage student data, attendance, and academic records. It
                    features a user-friendly interface that simplifies tracking
                    progress and generating reports. This tool enhances
                    communication between educators and students, ensuring a
                    more organized and effective educational experience.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-yellow-400 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.8K
                    </span>
                    <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      120
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-125"
                  src="https://tse2.mm.bing.net/th?id=OIP.HAxQXI6kEYVt48W0qxkgSwHaEE&pid=Api&P=0&w=300&h=300"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font bg-sky-500 font-medium text-black mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg text-black font-bold mb-3">
                    CountDown Timer
                  </h1>
                  <p className="leading-relaxed mb-3 text-white">
                    Here's a three-line paragraph for your countdown timer
                    project: The countdown timer project is a versatile tool
                    designed to track time for various activities, events, or
                    tasks. It features a customizable interface that allows
                    users to set specific durations and receive alerts when time
                    is up. With a responsive design and intuitive controls, it’s
                    perfect for both personal and professional use.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-yellow-400 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      2.9K
                    </span>
                    <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      98
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-125"
                  src="https://i.ytimg.com/vi/93qWqZvC4xg/maxresdefault.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font bg-sky-500 font-medium text-black mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-bold text-black mb-3">
                    Currency Cunvertor
                  </h1>
                  <p className="leading-relaxed mb-3 text-white">
                    Here's a three-line paragraph for your currency converter
                    project: I developed a currency converter project that
                    enables users to quickly and accurately convert between
                    different currencies. This tool fetches real-time exchange
                    rates to provide up-to-date conversions and supports
                    multiple currencies. Its user-friendly interface ensures a
                    seamless experience for anyone looking to manage their
                    finances or travel expenses..
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-yellow-400 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.6K
                    </span>
                    <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      67
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Feature section*/}

      <section
        className="text-white bg-gray-700 body-font"
        style={{
          background: "url('https://wallpaperaccess.com/full/5652002.png')",
        }}
      >
        <div className="container px-5 py-12 mx-auto">
          <div className="text-center mb-20">
            {/*Typewriter Effect */}
            <h1 className="bg-gradient-to-r from-blue-500 to-green-500 title-font font-bold sm:text text-4xl twxt-3xl mb-4 text-black flex items-center justify-center">
              <Typewriter
                options={{
                  strings: ["Project Features and Commands"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="text-base leading-relaxed py-10 text-black font-semibold xl:w-2/4 lg:w-3/4 mx-auto">
              My project leverages Node Package Manager (NPM) to streamline
              development and deployment. Key features include automated student
              data management, user authentication, and real-time notifications.
              The project includes various NPM scripts for running the
              development server, testing, and building the application,
              allowing for efficient and organized workflows. Simply use
              commands like `npm start`, `npm test`, and `npm run build` to
              manage these tasks effortlessly.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-3 border-2 border-indigo-300 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  npx izhar-calculator
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-3 border-2 border-indigo-300 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  npx izhar-number-guessing-game
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-3 border-2 border-yellow-300 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  npx atm-machine
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-3 border-2 border-yellow-300 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  npx izhar-oop-mybank
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-3 border-2 border-indigo-300 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  npx "oop-console
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-3 border-2 border-indigo-300 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  npx izhar_adventure_game
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-3 border-2 border-yellow-300 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  npx izhar-todo-application
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-3 border-2 border-yellow-300 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  npx izhar-currency-converter
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-3 border-2 border-indigo-300 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  npx izhar-word-counter
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-3 border-2 border-indigo-300 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  npx izhar-countdown-timer
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-3 border-2 border-yellow-300 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  npx quiz-system
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-3 border-2 border-yellow-300 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  npx izhar-student-management-system
                </span>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 py-2 px-8  bg-sky-500 rounded-lg items-center hover:bg-black focus:outline-none">
            <img
              className="w-15 h-10 rounded-full"
              src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
              alt="gitHub"
            />
            <span className="ml-4 flex items-start flex-col leading-none">
              <span className="text-xs text-white font-semibold mb-1">
                Visit Github
              </span>
              <a
                className="title-font font-bold"
                href="https://github.com/Izhar334"
              >
                Izhar334
              </a>
            </span>
          </button>
        </div>
      </section>
      {/*Development Section*/}
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
      {/* My Colleagues*/}

      <section
        className="text-gray-400 bg-gray-900 body-font"
        style={{
          background:
            "url('https://www.wallpapertip.com/wmimgs/83-838381_html-code-wallpaper.jpg')",
        }}
      >
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-indigo-400">
              My Developer Colleagues
            </h1>
            <p className="lg:w-2/3 mx-auto text-black font-semibold leading-relaxed text-base">
              My developer colleagues are the backbone of our technical team,
              bringing expertise and innovation to every project. With a deep
              understanding of various programming languages and technologies,
              they solve complex problems and create robust solutions. Their
              collaborative spirit and dedication drive our success, ensuring
              that we stay at the forefront of technology. Each developer's
              unique skills contribute to a dynamic and efficient workflow,
              making them invaluable to our collective achievements. Their
              commitment to excellence and continuous learning keeps us moving
              forward in an ever-evolving industry. ---
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover border-2 border-yellow-500 object-center sm:mb-0 mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
                  src="https://img.freepik.com/premium-vector/cute-boy-avatar-illustration_637684-31.jpg"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-yellow-600">
                    AB.Kashif
                  </h2>
                  <h3 className="text-sky-500 mb-3">UI Developer</h3>
                  <p className="mb-4 text-black font-semibold">
                    My UI developer colleague is a true artist of the digital
                    world, transforming designs into beautiful, responsive
                    interfaces that users love. With a deep understanding of
                    both aesthetics and functionality, they ensure every detail
                    is pixel-perfect and every
                  </p>
                  <span className="inline-flex">
                    <a className="text-sky-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-yellow-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-sky-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 border-2 border-yellow-500 object-cover object-center sm:mb-0 mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
                  src="https://img.freepik.com/premium-vector/cute-smiling-boy-avatar-flat-style-vector-illustration_710508-1241.jpghttps://img.freepik.com/premium-vector/cute-smiling-boy-avatar-flat-style-vector-illustration_710508-1241.jpg"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-yellow-600">
                    M.Uzair Khan
                  </h2>
                  <h3 className="text-sky-500 mb-3">Designer</h3>
                  <p className="mb-4 text-black font-semibold">
                    My designer colleague brings creativity and innovation to
                    every project, crafting visually stunning and user-friendly
                    designs. Their keen eye for detail and passion for
                    aesthetics elevate our work, making it both beautiful and
                    effective.
                  </p>
                  <span className="inline-flex">
                    <a className="text-sky-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-yellow-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-sky-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 border-2 border-indigo-500 object-cover object-center sm:mb-0 mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
                  src="https://cdn.pixabay.com/photo/2016/08/20/05/36/avatar-1606914_1280.png"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-yellow-500">
                    Hafsa Kamali
                  </h2>
                  <h3 className="text-sky-500 mb-3">UI Developer</h3>
                  <p className="mb-4 text-black font-semibold">
                    My UI developer colleague is a true artist of the digital
                    world, transforming designs into beautiful, responsive
                    interfaces that users love. With a deep understanding of
                    both aesthetics and functionality, they ensure every detail
                    is pixel-perfect and every
                  </p>
                  <span className="inline-flex">
                    <a className="text-sky-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-yellow-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-sky-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 border-2 border-indigo-500 object-cover object-center sm:mb-0 mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
                  src="https://i.pinimg.com/originals/e7/da/8d/e7da8d8b6a269d073efa11108041928d.jpg"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-yellow-500">
                    Fiza Sagar
                  </h2>
                  <h3 className="text-sky-500 mb-3">Designer</h3>
                  <p className="mb-4 text-black font-semibold">
                    My designer colleague brings creativity and innovation to
                    every project, crafting visually stunning and user-friendly
                    designs. Their keen eye for detail and passion for
                    aesthetics elevate our work, making it both beautiful and
                    effective.
                  </p>
                  <span className="inline-flex">
                    <a className="text-sky-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-yellow-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-sky-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Contact Me Section*/}
      <section
        className="text-gray-400 bg-gray-900 body-font relative"
        style={{
          background:
            "url('https://www.wallpapertip.com/wmimgs/83-838381_html-code-wallpaper.jpg')",
        }}
      >
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-indigo-500">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black font-semibold">
              Feel free to reach out with any questions, project inquiries, or
              just to say hello. I'm always happy to connect and discuss new
              opportunities!
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-sky-500 border-0 py-2 px-8 focus:outline-none hover:bg-black rounded text-lg">
                  Submmit
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                <a
                  className="text-white font-semibold hover:bg-black"
                  href="mailto:izharkhanq58@gmail.com"
                >
                  izharkhanq58@gmail.com
                </a>
                <p className="leading-normal my-5 text-black font-bold">
                  District Kemari Karachi Pakistan
                </p>
                <span className="inline-flex">
                  <a className="text-blue-600">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-blue-400">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-pink-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-yellow-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
