import React from "react";
import { Tilt } from 'react-tilt';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function ProjectCard({ project }) {
  const { title, description, technologies, year, imageUrl, demoLink, githubLink } = project;

  return (
    <Tilt className="bg-gray-800 text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full" options={{ max: 25, scale: 1.05, speed: 400 }}>
      {/* Project Image */}
      <div className="relative group">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-56 object-cover"
        />

        {/* Hover Overlay with Buttons */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white py-1 px-4 rounded-md hover:bg-gray-700 transition cursor-pointer"
          >
            View on GitHub
          </a>
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-500 text-white py-1 px-4 rounded-md hover:bg-gray-400 transition cursor-pointer"
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex items-center gap-2 flex-wrap">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-[#b0c4de] text-xs px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Year */}
        <div className="mt-4">
          <span className="text-gray-500 text-sm">{year}</span>
        </div>
      </div>
    </Tilt>
  );
}

export default ProjectCard;
