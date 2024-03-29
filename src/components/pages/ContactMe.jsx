import { useState, useEffect, useMemo } from "react";
import Title from "../Title";
import ContactForm from "../ContactForm";
import Notification from "../effects/Notification.jsx";
import { IconContext } from "react-icons";
import { TfiEmail } from "react-icons/tfi";
import { LuMailWarning } from "react-icons/lu";

const ContactMe = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const containerClasses = useMemo(() => {
    return `absolute mt-28 md:ml-[5.5rem] md:mr-5 ml-20 mr-0 flex pb-14 transition-opacity duration-1000 md:w-[calc(100%-7rem)] w-[calc(100%-6rem)] ${
      fadeIn ? "opacity-100" : "opacity-0"
    }`;
  }, [fadeIn]);

  const mailIcon = useMemo(
    () => (
      <IconContext.Provider value={{ className: "w-5 h-5" }}>
        <LuMailWarning />
      </IconContext.Provider>
    ),
    []
  );

  return (
    <>
      <Notification
        text="I'll get back to you as soon as possible!"
        icon={() => mailIcon}
      />
      <Title title="Contact Me" />

      <div className={containerClasses}>
        <div className="bg-slate-300 rounded-lg shadow-md p-6 pb-10 w-full">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
            Let's Connect!
            <span className="inline-block ml-2">
              <TfiEmail />
            </span>
          </h2>

          <p className="text-lg mb-4 text-gray-800 rounded bg-slate-50 px-3 py-2">
            Thank you for exploring my portfolio! Your visit means a lot as I
            strive to connect with potential opportunities. I'm enthusiastic
            about the prospect of collaborating or discussing how my skills
            align with your needs. Whether you have inquiries, job
            opportunities, or simply want to connect, please feel free to reach
            out via the form below or directly at{" "}
            <span className="text-slate-50 bg-indigo-400 rounded px-1 py-1">
              tyleroneildev@gmail.com
            </span>{" "}
            or connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/mahesh-gitte-6a9360248/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
            . Your interest and consideration are genuinely appreciated as I
            pursue new avenues and career possibilities.
          </p>

          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactMe;
