import React from "react";

const CV: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="hidden lg:block lg:w-1/4 p-4">
          <ul className="space-y-4">
            <li><a href="#basics" className="text-gray-800 hover:text-blue-600">Basics</a></li>
            <li><a href="#experience" className="text-gray-800 hover:text-blue-600">Experience</a></li>
            <li><a href="#education" className="text-gray-800 hover:text-blue-600">Education</a></li>
            <li><a href="#awards" className="text-gray-800 hover:text-blue-600">Awards</a></li>
            <li><a href="#skills" className="text-gray-800 hover:text-blue-600">Skills</a></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 p-4 space-y-8">
          
          {/* Basics */}
          <div id="basics" className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Information</h2>
            <p><strong>Name:</strong> Arsenii Stolbov</p>
            <p><strong>Email:</strong> <a href="mailto:arsenys46@gmail.com" className="text-blue-600">arsenys46@gmail.com</a></p>
            <p><strong>Phone:</strong> +1 604 802 8582</p>
            <p><strong>Summary:</strong> Fourth-year UBC student with expertise in Python, Java, JavaScript, C++, and computational chemistry. Skilled in software development, problem-solving, and product management.</p>
          </div>

           {/* Experience */}
           <div id="experience" className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Work Experience</h2>

            <div className="border-l-4 border-gray-300 pl-4 mb-4">
              <p><strong>Company:</strong> GidroLock (Moscow, Russia)</p>
              <p><strong>Role:</strong> Technical Project Manager</p>
              <p><strong>Duration:</strong> Jan 2023 - Jan 2024</p>
              <p className="font-semibold text-blue-700">Sensor-to-Multi-Valve Communication Enhancement:</p>
              <ul className="list-disc pl-6">
                <li>Identified and resolved a synchronization issue where only one valve received the alarm signal while the second valve failed to trigger in time.</li>
                <li>Created a delay-tolerant retransmission mechanism in C++ 17, ensuring alarm signals are sent continuously for up to 30 seconds, allowing both valves to respond reliably.</li>
              </ul>
              <p className="font-semibold text-blue-700 mt-4">Radio-Sensor Network Integration:</p>
              <ul className="list-disc pl-6">
                <li>Developed C++ 17 programs for radio-sensors using the ZigBee communication protocol to connect sensors to electric valves in automated systems.</li>
                <li>Optimized sensor-to-valve response times, ensuring prompt activation of electric valves in real-time water detection scenarios.</li>
              </ul>
              <p className="font-semibold text-blue-700 mt-4">Embedded Software – Smart Home Protocol Development:</p>
              <ul className="list-disc pl-6">
                <li>Designed and implemented a communication protocol for smart home devices using C/C++ on microcontrollers.</li>
                <li>Enabled connection between multiple IoT devices in a home automation ecosystem.</li>
              </ul>
            </div>

            <div className="border-l-4 border-gray-300 pl-4 mb-4">
              <p><strong>Company:</strong> Delumo (Salzburg, Austria)</p>
              <p><strong>Role:</strong> Technical Project Manager</p>
              <p><strong>Duration:</strong> Apr 2024 - Jul 2024</p>
              <p><strong>Responsibilities:</strong></p>
              <ul className="list-disc pl-6">
                <li>Performed SQL queries to analyse transaction data, user behaviour, and partner performance, supporting data-driven product and business decisions.</li>
                <li>Led market and partner analysis for more than 20 strategic negotiations with insurance companies in Europe, evaluating partnership models, commercial impact, and integration requirements.</li>
                <li>Collaborated with product managers and engineers in Agile teams to ensure timely delivery in line with business objectives.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div id="education" className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Education</h2>
            <div className="border-l-4 border-gray-300 pl-4 mb-4">
              <p><strong>Institution:</strong> University of British Columbia</p>
              <p><strong>Degree:</strong> CMS in Computer Science & Chemistry</p>
              <p><strong>Duration:</strong> Sep 2021 - Present</p>
            </div>
          </div>

          {/* Awards */}
          <div id="awards" className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Awards</h2>
            <div className="border-l-4 border-gray-300 pl-4 mb-4">
              <p><strong>Award:</strong> British Columbia Achievement Scholarship</p>
              <p><strong>Year:</strong> 2021</p>
              <p><strong>Details:</strong> UBC Entry Scholarship.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4 mb-4">
              <p><strong>Award:</strong> Hockey Championship of Moscow (U16) – Gold Medalist</p>
              <p><strong>Year:</strong> 2019-2020</p>
              <p><strong>Details:</strong>  Secured the championship title in the Moscow State U16 Hockey League, demonstrating exceptional skill, teamwork, and perseverance throughout the season.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4 mb-4">
              <p><strong>Award:</strong> BAUER International Hockey Tournament (U12-U15) – 3rd Place, Chicago, USA</p>
              <p><strong>Year:</strong> 2014</p>
              <p><strong>Details:</strong>  Achieved a podium finish (3rd place) in the prestigious BAUER International Hockey Tournament in Chicago, competing against top youth teams from around the world.</p>
            </div>
          </div>

          {/* Skills */}
          <div id="skills" className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Skills</h2>
            <p><strong>Programming Languages:</strong> C, C++, Java, JavaScript, SQL, CSS, HTML, Python, R (R Studio), Assembly</p>
            <p><strong>Technologies:</strong> Git, Oracle Database, Abacus (WebMO), Microsoft Office</p>
            <p><strong>Other Skills:</strong>  Full-Stack, Databases, Software Design, Data Structures, Algorithms, Software Systems, Web Development, Frontend, Computational Chemistry, Embedded Systems, Data Analysis </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CV;
