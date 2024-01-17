import { useState, useEffect, useMemo } from "react";
import Title from "../Title.jsx";
import Notification from "../effects/Notification.jsx";
import { IconContext } from "react-icons";
import ESI from "../../assets/images/esi.png";
import presentec from "../../assets/images/presentec.jpeg";
import gbc from "../../assets/images/gbc.png";
import uoft from "../../assets/images/uoft.png";
import {
  FaBriefcase,
  FaLaptopCode,
  FaCode,
  FaDatabase,
  FaTools,
  FaGraduationCap,
  FaAws,
} from "react-icons/fa";

const Experience = () => {
  const [fadeIn, setFadeIn] = useState(false);

  const size = 25;

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const containerClasses = useMemo(() => {
    return `absolute mt-28 ml-[4.5rem] mr-1 pb-14 pt-0 transition-opacity duration-1000 text-gray-800 w-[calc(100%-5rem)] ${
      fadeIn ? "opacity-100" : "opacity-0"
    }`;
  }, [fadeIn]);

  return (
    <>
      <Notification
        text="I'm currently studying for my AWS Cloud Practitioner Certification!"
        icon={() => (
          <IconContext.Provider value={{ className: "w-5 h-5" }}>
            <FaAws />
          </IconContext.Provider>
        )}
      />
      <Title title={"Experience"} />

      <div className={containerClasses}>
        <section className="mb-8 bg-slate-300 p-5 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold mb-4 flex items-center justify-center md:justify-start">
            <FaBriefcase className="mr-2 text-xl" />
            Work Experience
          </h2>
          <div className="bg-slate-50 rounded-md p-6 shadow-sm">
            <p className="font-semibold flex items-center justify-between border-b pb-3 mb-3">
              <span className="flex items-center text-gray-700">
                <img
                  src={ESI}
                  alt="ESI icon"
                  className="w-10 h-10 mr-2 object-contain"
                  loading="lazy"
                />
                <a
                  href="https://www.exchangesolutions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  MERN Stack Developer - Intern @ Siamaq Counsultancy Pvt Ltd{" "}
                </a>
              </span>
              <span className="text-sm text-gray-500">Jun 2023 - Nov 2023</span>
            </p>
            <ul className="list-disc ml-6 text-gray-700">
              <li>
                Created Node.js scripts for cutting-edge projects like Retrieval
                Trading Page For Crypto currancy exchange
              </li>
              <li>
                Collaborated with teams for innovative solutions, conducting
                experiments, and driving new technology development.
              </li>
              <li>
                Worked with senior developers on prototypes, feasibility
                studies, and concept validation.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8 bg-slate-300 p-5 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold mb-4 flex items-center justify-center md:justify-start">
            <FaGraduationCap className="mr-2 text-xl" />
            Education
          </h2>
          <div className="bg-slate-50 rounded-md p-6 shadow-sm">
            <p className="font-semibold flex items-center justify-between border-b pb-3 mb-3">
              <span className="flex items-center text-gray-700">
                <img
                  src={'https://upload.wikimedia.org/wikipedia/en/f/f6/Savitribai_Phule_Pune_University_Logo.png'}
                  alt="GBC Image"
                  className="w-10 h-10 mr-2 object-contain"
                  loading="lazy"
                />
                BE, Pune University{" "}
              </span>
              <span className="text-sm text-gray-500">Graduating Nov 2020</span>
            </p>
            <ul className="list-disc ml-6 text-gray-700">
              <li>
                Recognized for academic excellence and placed on the dean's list
                with a 6.4 / 10 GPA 
              </li>
              <li>
                Relevant Courses: 
                Full-Stack Development, Advanced Database Development, Data Structures
                and Algorithms, Agile Software Development, Advance Excel
              </li>
            </ul>
            <p className="font-semibold mt-4 flex items-center justify-between border-b pb-3 mb-3">
              <span className="flex items-center text-gray-700">
                <img
                  src={'https://www.yccamb.in/assets/images/logo.png'}
                  alt="UofT Image"
                  className="w-10 h-10 mr-1 object-contain"
                  loading="lazy"
                />
                Yeshwantrao Chavan Arts, Commerce & Science College, Ambajogai,
              </span>
              <span className="text-sm text-gray-500">2019 - 2022</span>
            </p>
            <ul className="list-disc ml-6 text-gray-700">
              <li>
                Previously attended before transferring to Pune University.
              </li>
              <li>
                Relevant Courses: Introduction to Computer Programming,
                Introduction to Computer Science, Introduction to Mathematical
                Proofs, Logic
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8 bg-slate-300 p-5 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold mb-4 flex justify-center items-center md:justify-start">
            <FaLaptopCode className="mr-2 text-xl" />
            Technical Skills
          </h2>
          <div className="bg-slate-50 rounded-md p-6 shadow-sm text-center md:text-left">
            <ul className="space-y-4">
              <li className="flex flex-col items-center md:items-start text-gray-700">
                <div className="flex flex-col md:flex-row items-center mb-2">
                  <FaCode
                    className="text-green-500 md:mr-2 text-2xl"
                    size={size}
                  />
                  <span className="font-semibold text-xl">Languages</span>
                </div>
                <p className="text-lg">
                  Javascript/Typescript, Python, Java, C#, Bash, PHP, SQL, R
                </p>
              </li>
              <li className="flex flex-col items-center md:items-start text-gray-700">
                <div className="flex flex-col md:flex-row items-center mb-2">
                  <FaTools className="text-blue-500 md:mr-2" size={size} />
                  <span className="font-semibold text-xl">
                    Technologies and Frameworks
                  </span>
                </div>
                <p className="text-lg">
                  HTML, CSS, Node.js, Express.js, React.js, Vite, Tailwind CSS,
                  Bootstrap, .NET
                </p>
              </li>
              <li className="flex flex-col items-center md:items-start text-gray-700">
                <div className="flex flex-col md:flex-row items-center mb-2">
                  <FaDatabase className="text-red-500 md:mr-2" size={size} />
                  <span className="font-semibold text-xl">Databases</span>
                </div>
                <p className="text-lg">MySQL, Oracle SQL, Snowflake</p>
              </li>
              <li className="flex flex-col items-center md:items-start text-gray-700">
                <div className="flex flex-col md:flex-row items-center mb-2">
                  <FaTools
                    className="text-yellow-500 md:mr-2 text-2xl"
                    size={size}
                  />
                  <span className="font-semibold text-xl">
                    Development Tools
                  </span>
                </div>
                <p className="text-lg">
                  AWS, Linux, Git/Github, Firebase Hosting, Wordpress, Jira,
                  Confluence, Slack
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Experience;
