import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from "react-tilt";
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card`"
      >
        <div
          option={{
            max: 45,
            scale: 0.5,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-center text-white text-[20px] font-bold">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem] ">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center mt-10 mb-5`}>Introduction</p>
        <h2 className={`${styles.sectionHeadTextLight} text-center mt-10 mb-5`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        // className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] flex justify-center ">
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] mx-auto ">
        Hello! I'm Anas Alakkad, a dedicated Software Engineer with a
        deep-rooted passion for coding and innovation. My journey in
        software development took a definitive turn in my final
        semester at California State Polytechnic University, Pomona,
        when I realized my true calling lay in software, more than in
        hardware.

        My academic background in Computer Engineering, highlighted by
        a GPA of 3.62, laid a strong foundation in both hardware and
        software realms. While I delved into C++ and microcontroller
        programming—developing sensor systems, digital clocks, and
        even a game called “Game of Life”—I found myself increasingly
        drawn towards the intricacies of software development.

        Beyond my technical prowess, my role as a Transportation
        Manager at Ceravo Care honed my leadership skills and
        operational efficiency. This blend of technical expertise,
        managerial experience, and a continuous drive for learning
        positions me uniquely in the field of software engineering.

        In my free time, I engage in diverse activities such as DIY projects,
        hiking, and reading. These hobbies not only offer me a creative outlet
        but also sharpen my problem-solving skills.
        They provide a balance that enhances my perspective and approach in the
        field of software engineering.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
