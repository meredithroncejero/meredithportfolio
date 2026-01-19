import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


import Bits from "../assets/bits.png";
import Google from "../assets/google.png";
import Coursera from "../assets/cousera.png";
import Dti from "../assets/dti.png";
import Scroll from "../assets/scroll.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const certificatesData = [
  {
    image: Dti,
    title: "Creative Seminar in Portfolio Making — Camarines Norte State College",
    description: "Focused on building effective portfolios, productivity tools, and presenting technical skills professionally.",
    date: "Mar 2025",
  },
  {
    image: Scroll,
    title: "From Scroll to Skill — Our Lady of Lourdes College Foundation Inc.",
    description: "Explored digital skills development, personal branding, and responsible use of technology for learning.",
    date: "Mar 14, 2025",
  },
  {
    image: Google,
    title: "Technical Support Fundamentals — Google (Coursera)",
    description: "Covered core IT support concepts including hardware, software, troubleshooting, and customer support basics.",
    date: "Dec 2024",
  },
  {
    image: Coursera,
    title: "Networking Basics — Cisco Networking Academy",
    description: "Introduced networking concepts such as IP addressing, network devices, and basic connectivity principles.",
    date: "Dec 2024",
  },
  {
    image: Bits,
    title: "Bicol IT Students Congress (BITSCON) — Camarines Norte State College",
    description: "Participated in seminars on emerging IT trends, innovation, and student-led technology initiatives.",
    date: "Apr 2024",
  },
];




const Certificate = () => {
  const [zoomImage, setZoomImage] = useState(null);

  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      {/* Title */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl text-stone-800 mb-10"
        style={{ fontFamily: "satoshi-black" }}
      >
        My Certificates
      </motion.h2>

      {/* Certificates Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
          >
            {/* IMAGE ONLY clickable */}
            <motion.img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover cursor-zoom-in"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => setZoomImage(cert.image)}
            />

            <div className="p-6">
              <h3
                className="text-lg md:text-xl font-bold mb-2 text-stone-800"
                style={{ fontFamily: "satoshi-bold" }}
              >
                {cert.title}
              </h3>
              <p
                className="text-zinc-600 text-sm mb-3"
                style={{ fontFamily: "satoshi-medium" }}
              >
                {cert.description}
              </p>
              <p
                className="text-xs text-gray-500"
                style={{ fontFamily: "satoshi-regular" }}
              >
                {cert.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Zoom Modal (NO dark background) */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomImage(null)}
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setZoomImage(null)}
                className="absolute -top-10 right-0 text-3xl font-bold text-stone-800 hover:text-red-500"
              >
                ×
              </button>

              <img
                src={zoomImage}
                alt="Certificate Preview"
                className="w-full rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificate;
