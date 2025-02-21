import React from "react";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-white text-center">
      
      {/* Full-Stack Title */}
      <h1 className="text-4xl font-bold text-blue-900 mt-5">
        Full-Stack <br />
        <span className="text-lg font-normal text-gray-600">
          When Front-End and Back-End Collide Together
        </span>
      </h1>

      {/* Background Split Layout */}
      <div className="flex w-full mt-10 items-stretch">
        
        {/* Left Side - Front-End */}
        <div className="w-1/2 bg-white flex flex-col items-center p-10">
          <h1 className="text-5xl font-bold text-blue-900">Front-End</h1>
          <ul className="text-gray-600 text-lg max-w-md mt-4 list-disc list-inside text-left">
            <li>Develop <strong>interactive and visually appealing</strong> user interfaces.</li>
            <li>Proficient in <strong>React, Tailwind CSS, and TypeScript</strong> for modern UI design.</li>
            <li>Ensure <strong>seamless user experiences</strong> with <strong>responsive and pixel-perfect</strong> designs.</li>
          </ul>
        </div>

        {/* Right Side - Back-End */}
        <div className="w-1/2 bg-gray-100 flex flex-col items-center p-10">
          <h1 className="text-5xl font-bold text-blue-900">Back-End</h1>
          <ul className="text-gray-600 text-lg max-w-md mt-4 list-disc list-inside text-left">
            <li>Developed a <strong>C++ 17 delay-tolerant retransmission system</strong> ensuring alarm signals are sent continuously for <strong>30 seconds</strong> to enhance multi-valve synchronization.</li>
            <li>Built <strong>ZigBee-based radio-sensor network programs</strong> to connect sensors with electric valves, optimizing <strong>real-time water leak detection</strong>.</li>
            <li>Designed and implemented a <strong>smart home communication protocol</strong> in <strong>C/C++</strong> to enable seamless <strong>IoT device integration</strong> in home automation systems.</li>
          </ul>
        </div>
      </div>

      {/* Image Below the Text */}
      <div className="mt-10">
        <img
          src="/assets/my-image.JPG"  
          alt="Arsenii Stolbov"
          className="w-80 h-auto object-cover rounded shadow-lg"
        />
      </div>
      
    </div>
  );
};

export default Home;
