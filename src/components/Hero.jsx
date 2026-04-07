import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import React, { useEffect, useState } from "react";
import { mypic1 } from "../assets";
import "./Hero.scss";

const toolStrings = [
  "HTML 5",
  "CSS 3",
  "Tailwind CSS",
  "JavaScript",
  "React JS",
  "Vite",
  "Redux Toolkit",
  "Node JS",
  "postgresql",
  "git",
  "docker",
  "Python",
  "Flask",
  "C++",
  "Express",
  "Next.js",
  "SQLAlchemy",
  "Embedded C",
  "SQLite",
  "Pytest",
  "AWS",
];

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [activeToolIndex, setActiveToolIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeTool = toolStrings[activeToolIndex];
    const typingSpeed = isDeleting ? 45 : 90;
    let timeoutId;

    if (!isDeleting && typedText === activeTool) {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(true);
      }, 1200);

      return () => window.clearTimeout(timeoutId);
    }

    if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setActiveToolIndex((currentIndex) => (currentIndex + 1) % toolStrings.length);
      return undefined;
    }

    timeoutId = window.setTimeout(() => {
      const nextLength = typedText.length + (isDeleting ? -1 : 1);
      setTypedText(activeTool.slice(0, nextLength));
    }, typingSpeed);

    return () => window.clearTimeout(timeoutId);
  }, [activeToolIndex, isDeleting, typedText]);

  return (
    <section className={`relative mx-auto h-screen w-full overflow-hidden bg-primary`}>
      <div className="relative z-20 flex">
        <div
          className={`head1 absolute max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-20`}
        >
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>


          <div className="head2">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi! I&apos;m <span className="text-[#915EFF]">Anas Alakkad</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100`}>
              I am a Software Engineering well versed in
              <br className="sm:block hidden" /> {" "}
              <span
                style={{
                  background: 'linear-gradient(45deg, #8e2de2, #4a00e0)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: 'bold',
                }}
              >
                {typedText}
              </span>
              <span className='ityped-cursor'>|</span>
            </p>

            {/* <div className="absolute link1">
              <a
                href="https://github.com/amalakkad93" target="_blank">
                <AiOutlineGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/anas-alakkad-a0b9371b3" target="_blank">
                <ImLinkedin />
              </a>

            </div> */}

          </div>
        </div>
        <div className="imgcontainer1 absolute z-20 violet-gradient">
          <img src={mypic1} alt="" className="object-contain" />
        </div>
      </div>

      <div className="relative z-0 h-screen w-full">
        <ComputersCanvas />
      </div>

      <div className='absolute xs:bottom-28 bottom-28 z-20 w-full flex justify-center items-center'>
        <a href='#education'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
