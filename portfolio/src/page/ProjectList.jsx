import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../component/projects.json';

function ProjectList() {
  return (
    <div id="projects" className="mx-auto max-w-7xl py-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">My Projects</h1>
        <p className="text-gray-400 text-lg mt-2">
          Explore the diverse range of applications I’ve built over the years.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
