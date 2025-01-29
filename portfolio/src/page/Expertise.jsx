import React from 'react';

function Expertise() {
  const expertiseItems = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: ["React", "JavaScript", "Three.js", "HTML5", "CSS3", "Material UI", "Tailwind CSS", "Styled Components"],
      description: "Creating responsive and interactive web interfaces with modern technologies."
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: ["Node.js", "Spring Boot", "Express.js", "REST APIs", "MySQL", "MongoDB", "PostgreSQL"],
      description: "Building scalable server-side applications and efficient databases."
    },
    {
      title: "DevOps & Tools",
      icon: "🚀",
      skills: ["Git", "GitHub", "GitLab", "Heroku", "AWS", "Netlify", "Render"],
      description: "Managing deployments, version control, and cloud infrastructure."
    },
    {
      title: "Other Skills",
      icon: "🔧",
      skills: ["Prismic CMS Integration & Customization", "Agile Methodologies", "Responsive Design", "UI/UX Best Practices", "Cross-Browser Compatibility"],
      description: "Ensuring seamless user experience, content management, and agile workflow."
    }
  ];

  return (
    <section id="expertise" className="mb-32 md:mb-64 text-white mt-12 md:mt-16 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 md:mb-4">
            Technical Expertise
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl">
            Full-stack development capabilities across multiple platforms
          </p>
        </div>

        {/* Expertise List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {expertiseItems.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 
              border-l-4 border-gray-500 pl-4 sm:pl-6 py-4"
            >
              {/* Icon */}
              <span className="text-3xl sm:text-4xl min-w-[40px]">
                {item.icon}
              </span>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-50">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-base sm:text-lg mt-2 sm:mt-3">
                  {item.description}
                </p>
                <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2.5 py-1 bg-gray-700 text-white text-xs sm:text-sm rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;