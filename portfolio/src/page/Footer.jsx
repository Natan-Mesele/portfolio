import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-white py-6 mt-16 mb-8">
      <div className="container mx-auto text-center">
        {/* Group for social media */}
        <div className="group">
          <div className="flex justify-center gap-8">
            {/* GitHub */}
            <a
              href="https://github.com/Natan-Mesele"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition relative"
            >
              <FaGithub className="text-4xl" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/natanmesele/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition relative"
            >
              <FaLinkedin className="text-4xl" />
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/MeseleNatt15655"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition relative"
            >
              <FaTwitter className="text-4xl" />
            </a>

            {/* Email */}
            <a
              href="mailto:nattymesele@gmail.com"
              className="text-gray-400 hover:text-white transition relative"
            >
              <FaEnvelope className="text-4xl" />
            </a>
          </div>

          {/* Bottom Border */}
          <div className="border-b-4 border-gray-300 w-2/3 mx-auto my-6"></div>
        </div>

        {/* Copyright Text */}
        <div className="mt-4 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Natan Mesele. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
