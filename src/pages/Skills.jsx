import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Font Awesome
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaJava,
  FaGlobe,
  FaRobot,
  FaChartLine,
  FaBrain,
  FaBug,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

// Simple Icons
import {
  SiMysql,
  SiSqlite,
  SiPostgresql,
  SiRaspberrypi,
  SiArduino,
  SiFigma,
  SiCanva,
  SiAutodesk,
  SiUnrealengine,
  SiAdobepremierepro,
  SiAdobeaftereffects,
} from "react-icons/si";

import { CgWebsite } from "react-icons/cg";
import { RiPagesLine } from "react-icons/ri";
import { GrOptimize } from "react-icons/gr";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Helper to split array into chunks
const chunkArray = (array, size) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 className="text-orange-500 text-8xl" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500 text-8xl" />, name: "CSS" },
    { icon: <FaJs className="text-yellow-400 text-8xl" />, name: "JavaScript" },
    { icon: <FaPython className="text-blue-400 text-8xl" />, name: "Python" },
    { icon: <FaJava className="text-red-500 text-8xl" />, name: "Java" },
    { icon: <SiMysql className="text-blue-600 text-8xl" />, name: "MySQL" },
    { icon: <SiSqlite className="text-slate-500 text-8xl" />, name: "SQLite" },
    { icon: <SiPostgresql className="text-blue-700 text-8xl" />, name: "PostgreSQL" },
    { icon: <SiRaspberrypi className="text-red-600 text-8xl" />, name: "Raspberry Pi" },
    { icon: <SiArduino className="text-teal-500 text-8xl" />, name: "Arduino Uno" },
    { icon: <SiFigma className="text-pink-500 text-8xl" />, name: "Figma" },
    { icon: <SiCanva className="text-cyan-500 text-8xl" />, name: "Canva" },
    { icon: <FaGitAlt className="text-orange-600 text-8xl" />, name: "Git" },
    { icon: <FaGithub className="text-gray-800 text-8xl" />, name: "GitHub" },
    { icon: <FaGlobe className="text-green-600 text-8xl" />, name: "Porkbun" },
    { icon: <FaRobot className="text-purple-500 text-8xl" />, name: "Machine Learning" },
    { icon: <FaChartLine className="text-emerald-500 text-8xl" />, name: "Data Analysis" },
    { icon: <FaBrain className="text-indigo-500 text-8xl" />, name: "Rule-Based AI" },
    { icon: <SiAutodesk className="text-sky-500 text-8xl" />, name: "3ds Max" },
    { icon: <SiUnrealengine className="text-black text-8xl" />, name: "Unreal Engine" },
    { icon: <SiAdobepremierepro className="text-purple-600 text-8xl" />, name: "Premiere Pro" },
    { icon: <SiAdobeaftereffects className="text-indigo-600 text-8xl" />, name: "After Effects" },
    { icon: <FaBug className="text-red-500 text-8xl" />, name: "Debugging & Testing" },
    { icon: <FaUsers className="text-blue-500 text-8xl" />, name: "Team Collaboration" },
    { icon: <FaLightbulb className="text-yellow-500 text-8xl" />, name: "Problem Solving" },
  ];

  // Group skills into chunks of 8 (4 icons per row × 2 rows)
  const skillGroups = chunkArray(skills, 8);

  const services = [
    {
      icon: <CgWebsite className="text-stone-800 text-6xl mb-4" />,
      title: "Front End",
      description:
        "Build responsive and interactive user interfaces using HTML, CSS, and JavaScript focusing on performance and accessibility.",
    },
    {
      icon: <RiPagesLine className="text-stone-800 text-6xl mb-4" />,
      title: "Back End",
      description:
        "Develop and manage server-side logic, databases, and APIs to support dynamic applications using Python, Java, and SQL-based databases.",
    },
    {
      icon: <GrOptimize className="text-stone-800 text-6xl mb-4" />,
      title: "UI/UX Design",
      description:
        "Design intuitive and visually appealing user experiences through wireframes, prototypes, and responsive layouts focused on usability.",
    },
  ];

  return (
    <>
      {/* Skills Section */}
      <section className="py-16 px-4 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-stone-800 mb-7"
          style={{ fontFamily: "satoshi-black" }}
        >
          My Tech Stack
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-zinc-600 leading-relaxed max-w-2xl mx-auto text-base md:text-lg"
          style={{ fontFamily: "satoshi-medium" }}
        >
          I have experience in IoT development using Raspberry Pi and Arduino, front-end web development with HTML, CSS, and JavaScript, and backend programming with Python, Java, and relational databases such as MySQL, SQLite, and PostgreSQL. I also apply UI/UX design principles using Figma and Canva, use Git and GitHub for version control, and have foundational knowledge in AI, automation, and multimedia tools. My work focuses on problem-solving, debugging, teamwork, and building efficient, user-centered solutions.
        </motion.p>

        <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {skillGroups.map((group, groupIndex) => (
              <CarouselItem key={groupIndex} className="basis-full">
                <div className="grid grid-cols-4 gap-y-8 gap-x-6 justify-items-center">
                  {group.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center"
                    >
                      {skill.icon}
                      <p className="mt-2 text-sm text-center" style={{ fontFamily: "satoshi-medium" }}>
                        {skill.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-rose-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-stone-800 mb-6"
            style={{ fontFamily: "satoshi-black" }}
          >
            What Can I Do
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 text-zinc-600 leading-relaxed max-w-2xl mx-auto text-base md:text-lg"
            style={{ fontFamily: "satoshi-medium" }}
          >
            I create Website, System and IoT with full stack skills of Back end, Front end and UX/UX skills.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-rose-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center"
              >
                {service.icon}
                <h5 className="mb-3 text-lg md:text-xl text-stone-800" style={{ fontFamily: "satoshi-bold" }}>
                  {service.title}
                </h5>
                <p className="text-zinc-600" style={{ fontFamily: "satoshi-medium" }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
