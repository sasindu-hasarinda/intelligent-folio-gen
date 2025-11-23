import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

const universityCourses = [
  "Software Quality Assurance (SQA)",
  "Object-Oriented Programming",
  "Data Structures",
  "Software Engineering",
  "Design and Analysis of Algorithms",
  "Statistical Methods",
  "Statistical Simulation",
  "Graph Theory",
  "Set Theory",
  "Sampling Techniques",
  "Non-parametric and Categorical Data Analysis",
];

const Education = () => {
  return (
    <section
      id="education"
      className="w-full max-w-7xl mx-auto px-6 py-16 sm:py-24 font-inter"
      aria-label="Education section"
    >
      <h2 className="text-4xl font-extrabold text-[#0F172A] mb-8 md:text-left text-center relative inline-block">
        Education
        <span className="block mx-auto md:mx-0 mt-2 h-1 rounded bg-[#06B6D4] w-[80px]" />
      </h2>

      <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto w-full">
        {/* University Card */}
        <article
          className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 transition-transform transform hover:-translate-y-2 hover:shadow-2xl w-full"
          tabIndex={0}
        >
          {/* Graduation Cap Icon */}
          <div className="flex-shrink-0 bg-[#06B6D4] rounded-full w-14 h-14 flex items-center justify-center">
            <GraduationCap className="w-7 h-7 text-white" aria-hidden="true" />
          </div>

          {/* Main info */}
          <div className="flex-1 w-full">
            <header className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-extrabold text-[#0F172A]">
                  B.Sc. (Hons) in Information Technology
                </h3>
                <p className="text-[#06B6D4] font-semibold text-lg mt-1">
                  SLIIT Malabe, Sri Lanka
                </p>
              </div>

              <div className="flex items-center text-gray-600 text-sm md:text-base space-x-2 whitespace-nowrap">
                <Calendar className="w-5 h-5" aria-hidden="true" />
                <time>February 2022 – Present</time>
              </div>
            </header>

            <div className="mt-4 flex justify-between items-center flex-wrap gap-4">
              <div className="inline-flex items-center gap-2 bg-[#06B6D4] text-white text-lg font-bold rounded-full px-4 py-1 select-none">
                CGPA: 3.1 / 4.0
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                >
                  <circle
                    className="text-teal-800"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="none"
                    cx="18"
                    cy="18"
                    r="15"
                    opacity="0.2"
                  />
                  <circle
                    className="text-white"
                    strokeWidth="4"
                    strokeDasharray="94.2"
                    strokeDashoffset="33.54"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    cx="18"
                    cy="18"
                    r="15"
                  />
                </svg>
              </div>

              {/* Key courses */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {universityCourses.map((course) => (
                  <span
                    key={course}
                    className="inline-block bg-teal-50 border border-teal-300 text-teal-700 rounded-md px-3 py-1 font-semibold cursor-pointer hover:bg-white hover:text-teal-900 hover:scale-105 transition-transform"
                    tabIndex={0}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* High School Card */}
        <article
          className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 transition-transform transform hover:-translate-y-2 hover:shadow-2xl w-full max-w-4xl mx-auto"
          tabIndex={0}
        >
          {/* School Cap Icon */}
          <div className="flex-shrink-0 bg-[#06B6D4] rounded-full w-14 h-14 flex items-center justify-center">
            <GraduationCap className="w-7 h-7 text-white" aria-hidden="true" />
          </div>

          {/* Main info */}
          <div className="flex-1 w-full">
            <h3 className="text-2xl font-extrabold text-[#0F172A] mb-3">
              Rahula College, Matara
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="flex justify-between items-center">
                <span>
                  <span className="font-semibold">GCE A/L 2018:</span> Combined
                  Mathematics (
                  <span className="font-bold text-[#06B6D4]">A</span>),
                  Chemistry (<span className="text-[#06B6D4]">B</span>), Physics
                  (<span className="text-[#06B6D4]">C</span>)
                </span>
                <span className="inline-block bg-[#06B6D4] text-white text-xs font-semibold px-2 py-0.5 rounded-full select-none ml-4 flex-shrink-0">
                  Z-Score: 1.24
                </span>
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#06B6D4] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.5 16.5a6 6 0 1111 0v1a3.5 3.5 0 11-7 0v-1z"
                  />
                </svg>
                GCE Ordinary Level 2014 – 7 A’s & 2 B’s
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Education;
