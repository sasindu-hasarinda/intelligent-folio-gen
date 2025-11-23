import React from "react";
import { Calendar, CheckCircle } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer Intern",
    position: "Frontend Developer",
    company: "Accron Revolution Pvt Ltd",
    date: "June 2024 – January 2025",
    remote: true,
    bullets: [
      "Engineered high-performance web applications using Next.js and StyleX",
      "Built responsive, SEO-optimized, and accessible user interfaces from Figma designs",
      "Implemented atomic CSS methodology with StyleX, improving styling consistency and development speed by 40%",
      "Collaborated with cross-functional teams in an Agile environment",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full max-w-7xl mx-auto px-6 py-16 sm:py-24 font-inter"
      aria-label="Experience section"
    >
      <h2 className="text-4xl font-extrabold text-[#0F172A] mb-8 md:text-left text-center relative inline-block">
        Experience
        <span className="block mx-auto md:mx-0 mt-2 h-1 rounded bg-[#06B6D4] w-[80px]" />
      </h2>

      <div className="flex flex-col gap-10">
        {experiences.map(
          ({ role, position, company, date, remote, bullets }, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
              tabIndex={0}
            >
              <header className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-6 gap-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#0F172A]">
                    {role}
                  </h3>
                  <p className="text-[#06B6D4] font-medium text-lg">
                    {position}
                  </p>
                  <p className="font-bold text-lg mt-1">{company}</p>
                </div>
                <div className="flex items-center text-gray-600 text-sm md:text-base mt-2 md:mt-0 space-x-2">
                  <Calendar
                    className="w-5 h-5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <time>{date}</time>
                  {remote && (
                    <span className="ml-4 inline-block bg-[#06B6D4] text-white text-xs font-semibold px-3 py-1 rounded-full select-none">
                      Remote
                    </span>
                  )}
                </div>
              </header>

              <ul className="list-none space-y-3 text-gray-700">
                {bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3" tabIndex={0}>
                    <CheckCircle
                      className="w-5 h-5 text-[#06B6D4] flex-shrink-0 transition-transform duration-200 hover:scale-110"
                      aria-hidden="true"
                    />
                    <p className="leading-relaxed">{bullet}</p>
                  </li>
                ))}
              </ul>
            </article>
          )
        )}
      </div>
    </section>
  );
};

export default Experience;
