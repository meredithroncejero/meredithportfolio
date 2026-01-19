import React from "react";
import { motion } from "framer-motion";
import slogo from "../assets/SchoolLogo.png"; // School logo
import { FaGraduationCap } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Education data
const educationData = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Camarines Norte State College",
    date: "2022 - 2026",
    description: "",
    logo: slogo, // Add the logo here
  },
];

const Education = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 text-center" id="education">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl text-stone-800 mb-10"
        style={{ fontFamily: "satoshi-black" }}
      >
        My Education
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow"
          >
            {/* School Logo */}
            <img
              src={edu.logo}
              alt={`${edu.institution} Logo`}
              className="w-20 h-20 object-contain mb-4"
            />

            <h3
              className="text-lg md:text-xl font-bold mb-2 text-stone-800"
              style={{ fontFamily: "satoshi-bold" }}
            >
              {edu.degree}
            </h3>
            <p
              className="text-zinc-600 text-sm mb-2"
              style={{ fontFamily: "satoshi-medium" }}
            >
              {edu.institution}
            </p>
            <p
              className="text-zinc-500 text-xs mb-3"
              style={{ fontFamily: "satoshi-regular" }}
            >
              {edu.date}
            </p>
            <p
              className="text-zinc-600 text-sm"
              style={{ fontFamily: "satoshi-medium" }}
            >
              {edu.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
