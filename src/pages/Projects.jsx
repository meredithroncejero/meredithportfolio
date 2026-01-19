import React, { useState } from "react";
import { motion } from "framer-motion";

import rapidImg from "../assets/rapid.png";
import Admin_dash from "../assets/admin_dashboard_optical.png";
import flowerShopImg from "../assets/flowershop.png";
import ecBookstoreImg from "../assets/ecbookstore.jpg";
import clothingImg from "../assets/clothing.png";
import ap1 from "../assets/ap1.png";
import ap2 from "../assets/ap2.png";
import ap3 from "../assets/ap3.png";
import rec1 from "../assets/rec1.png";
import rec2 from "../assets/rec2.png";
import rec3 from "../assets/capture.jpg";
import login from "../assets/log_in.png";
import defense from "../assets/caps.jpg";
import hardbound from "../assets/hardbound.jpg";
import demo from "../assets/demo.jpg";

import device from "../assets/device.png";
import sec from "../assets/sec.jpg";
import duck_login from "../assets/duck_login.png";
import eggdash from "../assets/eggdash.png";
import eggdash1 from "../assets/eggdash1.png";
import eggdash2 from "../assets/eggdash2.png";
import week1 from "../assets/week1.png";
import week2 from "../assets/week2.png";
import week3 from "../assets/week3.png";
import mon1 from "../assets/mon1.png";
import mon2 from "../assets/mon2.png";
import yr1 from "../assets/yr1.png";
import yr2 from "../assets/yr2.png";
import group from "../assets/group.jpg";

import airport from "../assets/airport.jpg";
import airport1 from "../assets/airport1.jpg";
import airport2 from "../assets/airport2.jpg";

import clogin from "../assets/closetlogin.png";
import cinventory from "../assets/inventory.png";
import cprofiles from "../assets/profiles.png";
import cadminitem from "../assets/adminitem.png";
import cinvoice from "../assets/invoice.png";
import citems from "../assets/items.png";
import csales from "../assets/sales.png";
import inv from "../assets/inv_group.jpg";
import poster from "../assets/poster.jpg";
import crop from "../assets/crop.jpg";


import sim1 from "../assets/sim1.jpg";
import sim2 from "../assets/sim2.jpg";
import sim3 from "../assets/sim3.jpg";
import sim4 from "../assets/sim4.jpg";
import sim9 from "../assets/sim9.jpg";


import home from "../assets/home.jpg";
import open from "../assets/open.jpg";
import floodalert from "../assets/floodalert.jpg";






import AdminAppointment from "../assets/admin_appointment_optical.png";
import InventoryOptical from "../assets/inventory_optical.png";
import InvoiceOptical from "../assets/invoice_optical.png";
import PatientRecordOptical from "../assets/patientrecord_optical.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
    {
      title:
        "Eye Can See Optical Clinic Appointment and Management System with IoT-based Face Shape Analysis and AI-driven Frame Recommendation (Capstone Project)",
      shortDescription:
        "A smart web-based system for Eye Can See Optical Clinic integrating appointment management and patient records.",
      longDescription:
        "Our capstone project for Eye Can See Optical Clinic is an intelligent web-based solution that modernizes clinic workflows and elevates patient care. By combining appointment scheduling, patient records, and inventory management with IoT-powered face shape analysis, the system captures facial data in real time. An AI-driven frame recommendation engine then suggests the most suitable eyeglass frames based on face shape, fit parameters, and aesthetic compatibility, supporting opticians in delivering personalized, efficient, and data-driven eye care services.",
      category: "IoT, Website",
      client: "Eye Can See Optical Bacoor",
      projectDate: "Jan-Dec 2025",
      images: [
        Admin_dash,
        login,
        AdminAppointment,
        InventoryOptical,
        InvoiceOptical,
        PatientRecordOptical,
        ap1,
        ap2,
        ap3,
        rec1,
        rec2,
        rec3,
        demo,
        defense,
        hardbound,
      ],
      link: "https://github.com/meredithroncejero/eyecanseeoptical/tree/main",
      tech: [
        "HTML + CSS",
        "JavaScript",
        "Python",
        "Flask",
        "Supabase (PostgreSQL)",
        "Porkbun",
        "Raspberry Pi",
      ],
      features: [
  { title: "Appointment Management", description: "Schedule, update, and manage eye care appointments with ease." },
  { title: "Automated Notifications", description: "Sends reminders for appointments, prescriptions, and payment deadlines." },
  { title: "Appointment History Tracking", description: "Maintains organized records of previous and upcoming appointments.", highlight: true },
  { title: "Patient Information Management", description: "Securely stores and manages accurate patient records in a centralized system." },
  { title: "Intelligent Inventory Control", description: "Tracks lenses and optical products in real time to prevent shortages." },
  { title: "Digital Billing & Payment Monitoring", description: "Generates invoices and tracks payments and outstanding balances automatically.", highlight: true },
  { title: "Reports & Data Analytics", description: "Delivers summarized reports and insights to help clinics analyze performance and make informed decisions." },
  { title: "Lens & Frame Compatibility Filtering", description: "Filters eyewear options based on prescription accuracy and fit requirements for optimal comfort." },
  { title: "IoT-Powered Face Detection", description: "Utilizes camera-based face detection to capture facial data for precise measurements." },
  { title: "Automated Facial & Skin Tone Analysis", description: "Analyzes facial structure and skin tone using computer vision to suggest suitable frames." },
  { title: "AI-Based Frame Recommendation", description: "Suggests the most appropriate eyewear frames based on facial features, improving accuracy and customer satisfaction." },
],

    },
    {
      title: "Autonomous Egg Quality Efficient Through IoT and Image Processing Technologies",
      shortDescription: "Automated egg quality assessment using IoT sensors.",
      longDescription: "The Autonomous Duck Egg Sorting Machine is designed to make the sorting of duck eggs faster, easier, and more accurate. It automatically places eggs into Balut, Penoy and Abnoy",
      category: "IoT, Website",
      client: "Project Based",
      projectDate: "February-December 2024",
      images: [
          crop,
          sec,
        eggdash,
        duck_login ,
        eggdash1,
        eggdash2,
        week1,
        week2,
        week3,
        mon1,
        mon2,
        yr1,
        yr2,
        device,
        poster,
        group,

      ],

      link: "",
      tech: ["IoT", "HTML", "CSS", "SQLITE", "PYTHON", "OPEN API", "JAVASCRIPT", "RASPBERRY PI", "ARDUINO UNO"],
      features: [
  { title: "Automated Egg Detection", description: "Detects eggs on the conveyor using a Raspberry Pi camera and captures images for analysis." },
  { title: "Image Processing–Based Classification", description: "Classifies duck eggs into balut, penoy, and abnoy categories using image processing algorithms." },
  { title: "IoT-Enabled Raspberry Pi Controller", description: "Acts as the central hub connecting sensors, camera, and actuators for real-time autonomous operation." },
  { title: "Autonomous Conveyor Control", description: "Controls conveyor movement and sorting mechanisms automatically based on laser detection." },
  { title: "Web-Based Monitoring Dashboard", description: "Provides real-time visualization of sorting data, egg counts, and system status through a web application." },
  { title: "Sorting Reports and Data Logging", description: "Stores daily and historical sorting data for balut, penoy, and abnoy eggs for tracking and analysis." },
  { title: "Remote Monitoring via IoT", description: "Allows users to observe sorting operations remotely using network-connected devices." },
  { title: "Labor Reduction & Efficiency Optimization", description: "Minimizes manual handling while increasing sorting speed, accuracy, and consistency." },
  { title: "Fully Autonomous Operation", description: "Enables continuous sorting with minimal supervision, ensuring efficient and reliable egg quality assessment." },
  { title: "Scalable and Upgrade-Friendly Design", description: "Supports future enhancements such as AI-based classification or additional egg quality parameters." },
]

    },


    {
      title: "Agent-Based Simulation & GIS Mapping of Tuberculosis Transmission in Daet, Camarines Norte",
  shortDescription: "Simulation and spatial analysis of TB spread using agent-based modeling and GIS tools.",
  longDescription: "This project models the transmission dynamics of tuberculosis in Daet, Camarines Norte using agent-based simulation integrated with GIS mapping. It visualizes infection spread across different geographic locations, identifies high-risk areas, and supports public health planning by simulating intervention strategies and policy impacts.",
  category: "Simulation",
      client: "Project Based",
      projectDate: "Nov.2024 - Dec. 2024 ",
  images: [
      sim1,
      sim2,
      sim3,
      sim4,
      sim9,],
  link: "https://zenodo.org/records/14538413",
  tech: ["Python", "GIS (QGIS)", "Agent-Based Modeling", "Spatial Analysis", "Data Visualization"],
  features: [
      { title: "Agent-Based Simulation", description: "Models the spread of tuberculosis through a population, simulating individual interactions and infection dynamics." },
      { title: "GIS Mapping", description: "Visualizes TB transmission geographically, highlighting hotspots and areas of high infection risk." },
      { title: "Spatial Analysis", description: "Analyzes the impact of environmental and demographic factors on the spread of tuberculosis." },
      { title: "Intervention Strategy Simulation", description: "Tests the effectiveness of different public health interventions, such as vaccination or awareness campaigns." },
      { title: "Data-Driven Insights", description: "Provides actionable insights for health authorities to identify priority areas and optimize resource allocation." },
      { title: "Predictive Modeling", description: "Forecasts potential outbreak scenarios under various conditions to support proactive decision-making." },
      { title: "Interactive Visualizations", description: "Enables users to explore simulation results and infection patterns with intuitive, easy-to-understand maps and charts." }
    ]

},


 {
      title: "Smart IoT Mactan Cebu Airport",
      shortDescription: "The Mactan Cebu International Smart IoT Airport miniature model.",
      longDescription: "The Mactan Cebu International Smart IoT Airport miniature model showcases a cutting-edge, smart airport environment enhanced by Internet of Things (IoT) technology. This model integrates a variety of sensors and modules to simulate real-world airport operations, focusing on safety, efficiency, and sustainability. The miniature airport features several key components designed to monitor environmental conditions, detect runway hazards, enhance security, and optimize lighting.",
      category: "IoT",
      client: "Project Based",
      projectDate: "November-December 2024",
      images: [airport,airport2,airport1,],
      link: "",
      tech: ["ESP32", "Arduino Uno", "Blynk"],
      features: [
          { title: "Environmental Monitoring", description: "Uses the MQ-135 sensor to track temperature, humidity, and air quality, ensuring optimal airport conditions." },
          { title: "Runway Hazard Detection", description: "Employs HC-SR04 ultrasonic sensors to detect small objects or obstacles on airport runways, improving safety." },
          { title: "Security Monitoring", description: "PIR motion sensors monitor restricted areas to prevent unauthorized access and enhance airport security." },
          { title: "IoT Connectivity", description: "Wi-Fi modules (ESP32) connect the system to the internet for real-time data monitoring and control." },
          { title: "LED Lighting Optimization", description: "Controls LED lights to illuminate the airport at night efficiently while reducing energy consumption." },
          { title: "Automated Runway Safety", description: "Integrates sensors and modules to automatically detect hazards on runways and maintain safe operations." },
          { title: "Integrated Environmental Dashboard", description: "Displays environmental conditions and alerts through a connected monitoring system for proactive management." },
          { title: "Enhanced Airport Efficiency", description: "Combines smart IoT modules to optimize airport operations, from security to lighting and environmental monitoring." },
        ]

    },

{
      title: "R-Closet Sales & Inventory System",
      shortDescription: "Sales and inventory tracking system.",
      longDescription: "R-Closet is Python Tkinter-based GUI application for managing sales and inventory. Admin users can add, edit, or remove products, track inventory, review sales data, and manage staff accounts. Transactional users can create invoices and check product availability, ensuring streamlined operations for both management and staff.",
      category: "System",
      client: "Project Based",
      projectDate: "Feb. 2023 – May. 2023",
      images: [clogin,
        cinventory,
        cprofiles,
        cadminitem,
        cinvoice,
        citems,
        csales,
        inv,
],
      link: "",
      tech: ["PYTHON", "TKINTER GUI", "SQLITE"],
      features: [
  {
    title: "Admin Dashboard",
    description: "Centralized control panel for managing all aspects of the system, providing quick access to key operations and statistics."
  },
  {
    title: "Sales Management",
    description: "Monitor and track all sales transactions, generate reports, and analyze sales performance."
  },
  {
    title: "Inventory Management",
    description: "Add, update, and remove products from inventory, keeping stock levels accurate and up-to-date."
  },
  {
    title: "User Profile Management",
    description: "Manage profiles of all users, assign roles, and maintain user-specific permissions for secure system access."
  },
  {
    title: "Item Management (User)",
    description: "View available items, check details, and manage personal item selections within the system."
  },
  {
    title: "Invoice Management (User)",
    description: "Generate invoices for purchased items, track payment status, and maintain personal transaction records."
  },
  {
    title: "Role-Based Access Control",
    description: "Separate functionalities for Admin and User roles, ensuring each user only accesses features relevant to their permissions."
  }
],


    },
    {
      title: "Aqua Alert",
      shortDescription: "Flood monitoring and early warning system.",
      longDescription: "Residents face significant challenges during flood disasters, including insufficient preparedness due to a lack of plans, resources, and knowledge; reluctance to evacuate because of safety concerns, pets, limited transportation, or health issues; and inadequate warning systems, as many rely on word-of-mouth alerts rather than timely, accessible notifications, which can delay critical responses and increase risk.",
      category: "UX/UI Design ",
      client: "HCI Project Based",
      projectDate: "Nov.2024 - Dec. 2024 ",
      images: [open,home,floodalert,],
      link: "",
      tech: ["FIGMA"],
      features: [
  {
    title: "Daily Dashboard",
    description: "Provides real-time updates on weather forecasts, water levels, and rainfall duration directly on the home screen."
  },
  {
    title: "Continuous Rainfall and Water Level Monitoring",
    description: "Uses sensors to track rainfall duration and water levels, ensuring up-to-date environmental data for accurate flood predictions."
  },
  {
    title: "Flood Prediction",
    description: "Analyzes rainfall and water level data to predict potential flooding events, providing early warnings for increased risk."
  },
  {
    title: "Evacuation Advisory",
    description: "Alerts residents to evacuate when a critical flood condition is detected, helping ensure safety before the situation worsens."
  },
  {
    title: "Evacuation Route Guidance",
    description: "Suggests the safest and fastest routes to the nearest evacuation center for residents during emergencies."
  },
  {
    title: "Safety Confirmation",
    description: "Confirms resident safety once they reach the evacuation center using in-app indicators."
  },
  {
    title: "Automated Coast Guard Alerts",
    description: "Notifies coast guard officials if residents fail to evacuate, ensuring timely rescue operations."
  },
  {
    title: "Multi-Channel Communication",
    description: "Sends alerts via internet, SMS, or satellite communication depending on network availability, ensuring reliable notifications under all conditions."
  },
  {
    title: "Proactive Rescue Coordination",
    description: "Enables coast guard teams to initiate rescue operations efficiently based on real-time monitoring and alerts."
  }
]

    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImage(0);
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 px-4 bg-orange-50">
      <div className="max-w-6xl mx-auto text-center">
       <motion.h2
          className="text-3xl md:text-4xl mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Projects
        </motion.h2>

        <p className="text-zinc-600 mb-10 max-w-2xl mx-auto">
          A showcase of my projects including IoT integrations, web applications, and AI-powered solutions, highlighting skills in full-stack development and smart systems.
        </p>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => openModal(project)}
              className="bg-white rounded-xl shadow-md cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-zinc-600 mb-3">{project.shortDescription}</p>

                {/* Technologies displayed on card */}
                <div className="flex flex-wrap gap-1">
                  {project.tech?.map((t, i) => (
                    <span
                      key={i}
                      className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="bg-white w-full max-w-6xl h-full overflow-auto relative p-6 rounded-xl"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-2xl z-50"
            >
              ✕
            </button>

            {/* IMAGE CAROUSEL */}
            <div className="relative w-full h-[420px] mb-10 flex items-center justify-center">
              <div className="relative border-4 border-blue-300 rounded-xl w-full max-w-4xl h-full flex items-center justify-center">
                <motion.img
                  key={currentImage}
                  src={selectedProject.images[currentImage]}
                  className="max-w-full max-h-full object-contain"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                />

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 bg-black/40 text-white w-10 h-10 rounded-full"
                    >
                      ‹
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 bg-black/40 text-white w-10 h-10 rounded-full"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              <div className="absolute bottom-[-30px] flex gap-2">
                {selectedProject.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-3 h-3 rounded-full ${
                      i === currentImage ? "bg-blue-400" : "bg-blue-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* CONTENT */}
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>

              {/* Project Info */}
              <div className="text-sm text-zinc-500 mb-4 flex flex-wrap gap-6">
  {selectedProject.category && (
    <div><strong>Category:</strong> {selectedProject.category}</div>
  )}
  {selectedProject.client && (
    <div><strong>Client:</strong> {selectedProject.client}</div>
  )}
  {selectedProject.projectDate && (
    <div><strong>Project Date:</strong> {selectedProject.projectDate}</div>
  )}
</div>


              <p className="text-zinc-600 mb-6">{selectedProject.longDescription}</p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mb-12">
                {selectedProject.tech?.map((t, i) => (
                  <span
                    key={i}
                    className="bg-blue-200 px-3 py-1 rounded-full text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* KEY FEATURES */}
              {selectedProject.features && (
                <div className="mb-16">
                  <h4 className="text-2xl font-bold mb-8">
                    Key Features
                    <span className="block w-14 h-1 bg-blue-400 mt-2" />
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {selectedProject.features.map((f, i) => (
                      <motion.div
                        key={i}
                        className="border border-blue-200 rounded-xl p-6 bg-white hover:bg-blue-50 hover:border-blue-300 transition-colors duration-300"
                        whileHover={{ scale: 1.03 }}
                      >
                        <h5 className="font-bold mb-2">{f.title}</h5>
                        <p className="text-sm text-zinc-600">{f.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-300 px-6 py-3 rounded-sm font-semibold"
              >
                View Project
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
