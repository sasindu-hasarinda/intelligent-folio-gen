import React from "react";
import {
  Code,
  Palette,
  Database,
  Cloud,
  TestTube,
  Wrench,
  Brain,
  Users,
  Globe,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "C/C++", "JavaScript", "SQL", "R"],
  },
  {
    title: "Frontend Development",
    icon: Palette,
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "StyleX", "Tailwind CSS"],
  },
  {
    title: "Backend & Frameworks",
    icon: Database,
    skills: ["Node.js", "Django", "Spring Boot"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "Firebase Firestore"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS (EC2, S3)",
      "Docker",
      "Git",
      "Linux (Bash/Zsh)",
      "VirtualBox",
      "VMware",
    ],
  },
  {
    title: "Testing & QA",
    icon: TestTube,
    skills: ["Selenium", "Cypress", "Postman", "Jest", "Unit Testing"],
  },
  {
    title: "Machine Learning & AI",
    icon: Brain,
    skills: [
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
      "Model Training & Evaluation",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "Jira", "Docker", "Postman", "Figma (basic)"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      "Problem-Solving",
      "Team Collaboration",
      "Time Management",
      "Technical Documentation",
    ],
  },
  {
    title: "Languages",
    icon: Globe,
    skills: ["English (Fluent)", "Sinhala (Native)"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full max-w-7xl mx-auto px-6 py-16 sm:py-24 font-inter"
      aria-label="Skills & Expertise section"
    >
      <h2 className="text-4xl font-extrabold text-[#0F172A] mb-8 md:text-left text-center relative inline-block">
        Skills &amp; Expertise
        <span className="block mx-auto md:mx-0 mt-2 h-1 rounded bg-[#06B6D4] w-[80px]" />
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skillCategories.map(({ title, icon: Icon, skills }) => (
          <article
            key={title}
            tabIndex={0}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#06B6D4]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#d1f1fb] text-[#06B6D4]">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#06B6D4]">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-teal-100 text-teal-700 rounded-full px-3 py-1 text-sm font-medium transition-transform transform hover:bg-teal-200 hover:scale-105 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
