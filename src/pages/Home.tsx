import React from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-white text-center px-4 sm:px-6 lg:px-8">
      
      {/* Animated Intro Text */}
      <motion.div
        className="mt-16 mb-16 text-2xl sm:text-3xl font-semibold gradient-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Arsenii Stolbov. Welcome to my portfolio!
      </motion.div>

      {/* Full-Stack Title */}
      <motion.h1
        className="text-3xl sm:text-5xl font-bold text-blue-900 mt-16 leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Full-Stack <br />
        <span className="text-base sm:text-lg font-normal text-gray-600">
          When Front-End and Back-End Collide Together
        </span>
      </motion.h1>

      {/* Other sections  */}
      <div className="w-full mt-10 space-y-20">
        
        {/* Front-End Section */}
        <motion.div
          className="w-full md:w-2/3 mx-auto bg-white flex flex-col items-center p-10 shadow-lg rounded-lg"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Front-End</h2>
          <ul className="text-gray-600 text-sm sm:text-lg max-w-md mt-4 list-disc list-inside text-left">
            <li>Develop <strong>interactive and visually appealing</strong> user interfaces.</li>
            <li>Proficient in <strong>React, Tailwind CSS, and TypeScript</strong> for modern UI design.</li>
            <li>Ensure <strong>seamless user experiences</strong> with <strong>responsive and pixel-perfect</strong> designs.</li>
          </ul>
        </motion.div>

        {/* Back-End Section */}
        <motion.div
          className="w-full md:w-2/3 mx-auto bg-gray-100 flex flex-col items-center p-10 shadow-lg rounded-lg"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Back-End</h2>
          <ul className="text-gray-600 text-sm sm:text-lg max-w-md mt-4 list-disc list-inside text-left">
            <li>Developed a <strong>C++ 17 delay-tolerant retransmission system</strong> ensuring alarm signals are sent continuously for <strong>30 seconds</strong> to enhance multi-valve synchronization.</li>
            <li>Designed and implemented a <strong>smart home communication protocol</strong> in <strong>C/C++</strong> to enable seamless <strong>IoT device integration</strong> in home automation systems.</li>
          </ul>
        </motion.div>
      </div>

      {/* Animated Image */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="/assets/my-image.JPG"  
          alt="Arsenii Stolbov"
          className="w-40 sm:w-60 md:w-80 h-auto object-cover rounded shadow-lg"
        />
      </motion.div>
      
    </div>
  );
};

export default Home;
