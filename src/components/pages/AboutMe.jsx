import { IconContext } from "react-icons";
import { useState, useEffect, useCallback } from "react";
import Title from "../Title";
import headshot from "../../assets/images/headshot.png";
import Notification from "../effects/Notification";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { IoLocation, IoTime } from "react-icons/io5";
import Button from "../Button";
const stackList = [

  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    name: "ReactJS",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    name: "NodeJS",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    name: "Java",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    name: "MySQL",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    name: "Git",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    name: "HTML",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    name: "CSS",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
    name: "Bootstrap",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
    name: "Material UI",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
    name: "Figma",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg",
    name: "TailwindCSS",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    name: "VS Code",
  },
];
const AboutMe = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      minute: "numeric",
    })
  );

  useEffect(() => {
    setFadeIn(true);

    const intervalId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          minute: "numeric",
        })
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const containerClasses = `absolute mt-28 md:ml-[5.5rem] md:mr-5 ml-16 mr-0 flex flex-col md:flex-row justify-center items-center md:items-start gap-8 transition-opacity duration-1000 ${
    fadeIn ? "opacity-100" : "opacity-0"
  }`;

  const iconProvider = useCallback(
    (icon) => (
      <IconContext.Provider value={{ className: "w-5 h-5" }}>
        {icon}
      </IconContext.Provider>
    ),
    []
  );

  return (
    <>
      <Notification
        text="Connect with me on LinkedIn...!"
        icon={() => iconProvider(<SiLinkedin />)}
      />
      <Title title={"About Me"} />

      <div className={containerClasses}>
        <div className="flex flex-col items-center border-b-2 border-gray-300 pb-4 md:border-b-0 md:pb-0 md:w-80 lg:w-96">
          <img
            src={
              "https://res.cloudinary.com/daricnizg/image/upload/v1705467437/1694609554591_qbkrm0.jpg"
            }
            alt="Profile"
            className="w-60 h-60 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-full object-cover mb-4"
          />

          <div className="text-center">
            <p className="text-lg font-semibold">Mahesh Gitte</p>
            <p className="text-gray-400">MERN Stack Developer</p>
          </div>

          <div className="text-left mt-4">
            <p className="mb-2 flex items-center">
              <IconContext.Provider value={{ className: "w-5 h-5 mr-1" }}>
                <IoLocation />
              </IconContext.Provider>
              KarveNagar, Pune
            </p>
            <p className="mb-2 flex items-center">
              <IconContext.Provider value={{ className: "w-5 h-5 mr-1" }}>
                <IoTime />
              </IconContext.Provider>
              {currentTime}
              <p>(UTC +05:30)</p>
            </p>
          </div>

          <div className="flex gap-4 mt-auto">
            <a
              href="https://github.com/maheshgitte88"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline flex items-center"
            >
              <IconContext.Provider value={{ className: "w-5 h-5 mr-1" }}>
                <SiGithub />
              </IconContext.Provider>
              Github
            </a>

            <a
              href="https://www.linkedin.com/in/mahesh-gitte-6a9360248/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline flex items-center"
            >
              <IconContext.Provider value={{ className: "w-5 h-5 mr-1" }}>
                <SiLinkedin />
              </IconContext.Provider>
              LinkedIn
            </a>
          </div>
          <Button href="/resume.pdf" text="View Resume" />
        </div>

        <div className="border-2 border-gray-300 p-4 w-[calc(100%-2rem)] md:w-2/3 lg:w-2/3 rounded-lg bg-slate-300 mb-14">
          {/* <p className='text-lg font-semibold mb-4 text-gray-900'>
            tyleroneil/AboutMe<span className='text-gray-600'>.md</span>
          </p> */}

          <p className="text-gray-800 rounded bg-slate-50 px-3">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              Hi, I'm Mahesh Gitte.
            </h2>
          </p>

          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900">
                Profile
              </h2>
              <p className="text-gray-800 rounded bg-slate-50 px-3 py-2">
                Highly motivated aspiring MERN Stack Developer with hands-on
                experience in crafting web applications and websites in
                react.js. I've served as a{" "}
                <a
                  href="https://www.exchangesolutions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-50 bg-indigo-400 rounded px-1 py-1 hover:underline hover:text-white"
                >
                  MERN Stack Developer Intern at Siamaq Consultancy Pvt Ltd
                </a>
                , contributing to cutting-edge projects involving Node.js for
                applications like coincurd.com. Additionally, my role as a{" "}
                involved maintaining and enhancing company projects using
                React.js & Node.js, ensuring optimal functionality and user
                experience. I'm currently searching for a new opportunity in IT.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900">
                Hobbies and Interests
              </h2>
              <p className="text-gray-800 rounded bg-slate-50 px-3 py-2">
                Programming is more than a job for me; it's a passion. I'm
                constantly diving into new side projects and experimenting with
                the latest tech trends. . I also enjoy a variety of music,
                especially 1900's & panjabi
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900">
                My Skills and Tools
              </h2>
              <div className="text-gray-800 rounded bg-slate-50 px-3 py-2">
                <div className="flex flex-wrap justify-center">
                  {stackList.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-center m-2"
                    >
                      <img
                        src={skill.img}
                        alt={skill.name}
                        loading="lazy"
                        className="w-8 h-8 mr-2"
                      />
                      <p>{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
