import React from "react";
import { CheckCircle, Github, ExternalLink, Calendar } from "lucide-react";

const projects = [
  {
    title: "Gym Management System",
    description: "Full-stack gym management web app",
    locationDate: "SLIIT, Feb 2024 – Dec 2024",
    features: [
      "Membership management",
      "Class scheduling",
      "Automated payments",
      "Attendance tracking",
      "Social features (posts, likes, comments)",
    ],
    technologies: ["Java Spring Boot", "React.js", "MongoDB"],
    viewCodeUrl: "#",
    liveDemoUrl: "#",
  },
  {
    title: "IShop – Accessible E-commerce for Visually Impaired",
    description: "Accessibility-first online shopping platform",
    locationDate: "SLIIT, Feb 2024 – Dec 2024",
    features: [
      "Voice navigation",
      "Screen reader optimized",
      "High-contrast mode",
      "Keyboard navigation",
      "Secure payments",
      "Reviews & wishlist",
      "Order tracking",
    ],
    technologies: ["Next.js", "Firebase", "Node.js"],
    viewCodeUrl: "#",
    liveDemoUrl: "#",
  },
  {
    title: "Project Management Tool",
    description: "Modern task & project tracking platform",
    locationDate: "Accron Revolution, Remote, Jun 2024 – Present",
    features: [
      "Kanban boards",
      "Task assignment",
      "Real-time updates",
      "Gantt charts",
    ],
    technologies: ["Next.js", "Firebase"],
    viewCodeUrl: "#",
    liveDemoUrl: "#",
  },
  {
    title: "Online Ticket Booking System",
    description: "Event & service ticket booking platform",
    locationDate: "Accron Revolution, Remote, Jun 2024 – Present",
    features: [
      "Seat selection",
      "Multiple payment gateways",
      "Real-time availability",
    ],
    technologies: ["Next.js", "Firebase"],
    viewCodeUrl: "#",
    liveDemoUrl: "#",
  },
  {
    title: "Loan Management System",
    description: "Secure loan tracking & repayment system",
    locationDate: "Accron Revolution, Remote, Jun 2024 – Present",
    features: [
      "Loan tracking",
      "Automated notifications",
      "Secure auth",
      "Real-time payments",
    ],
    technologies: ["Next.js", "Firebase"],
    viewCodeUrl: "#",
    liveDemoUrl: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full max-w-7xl mx-auto px-6 py-16 sm:py-24 font-inter"
      aria-label="Projects section"
    >
      <h2 className="text-4xl font-extrabold text-[#0F172A] mb-8 md:text-left text-center relative inline-block">
        Projects
        <span className="block mx-auto md:mx-0 mt-2 h-1 rounded bg-[#06B6D4] w-[80px]" />
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(
          ({
            title,
            description,
            locationDate,
            features,
            technologies,
            viewCodeUrl,
            liveDemoUrl,
          }) => (
            <article
              key={title}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]"
              tabIndex={0}
            >
              <h3 className="text-2xl font-extrabold text-[#0F172A] mb-1">
                {title}
              </h3>
              <p className="text-gray-700 leading-tight mb-1 truncate" title={description}>
                {description}
              </p>
              <div className="flex items-center text-gray-500 text-sm mb-6 space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{locationDate}</span>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-[#06B6D4] mb-2">Key Features</h4>
                <ul className="list-none space-y-2 max-h-36 overflow-y-auto pr-2">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-[#06B6D4]"
                    >
                      <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-[#06B6D4] mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#06B6D4] text-white rounded-full px-3 py-1 text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex gap-4 flex-wrap">
                <a
                  href={viewCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 justify-center px-4 py-2 bg-[#06B6D4] text-white rounded-full font-semibold hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  aria-label={`View code for ${title}`}
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </a>
                <a
                  href={liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 justify-center px-4 py-2 border border-[#06B6D4] text-[#06B6D4] rounded-full font-semibold hover:bg-[#06B6D4] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  aria-label={`Live demo of ${title}`}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
