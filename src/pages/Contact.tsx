import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-900">Contact</h1> {/* Updated to dark blue */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <a href="mailto:arsenys46@gmail.com" className="block bg-white shadow rounded-lg p-4 hover:shadow-md">
          <div className="flex items-center mb-2">
            <FaEnvelope className="text-black w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold text-blue-900">Email</h2> {/* Updated to dark blue */}
          </div>
          <p className="text-gray-700">arsenys46@gmail.com</p>
        </a>

        <a href="https://www.linkedin.com/in/arsenii-stolbov-43415931a/" className="block bg-white shadow rounded-lg p-4 hover:shadow-md">
          <div className="flex items-center mb-2">
            <FaLinkedin className="text-black w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold text-blue-900">LinkedIn</h2> {/* Updated to dark blue */}
          </div>
          <p className="text-gray-700">Arsenii Stolbov</p>
        </a>

        <a href="https://github.com/Arseny15" className="block bg-white shadow rounded-lg p-4 hover:shadow-md">
          <div className="flex items-center mb-2">
            <FaGithub className="text-black w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold text-blue-900">GitHub</h2> {/* Updated to dark blue */}
          </div>
          <p className="text-gray-700">Arseny15</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
