import React from "react";
import { MapPin, Mail, Phone, Linkedin, Github, Globe } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full max-w-7xl mx-auto px-6 py-16 sm:py-24 font-inter"
      aria-label="About Me section"
    >
      <h2 className="text-4xl font-extrabold text-[#0F172A] mb-8 md:text-left text-center relative inline-block">
        About Me
        <span className="block mx-auto md:mx-0 mt-2 h-1 rounded bg-[#06B6D4] w-[80px]" />
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-16">
        {/* About text */}
        <div className="md:w-[65%] max-w-[720px] text-gray-700 text-lg leading-relaxed">
          Energetic and detail-oriented 4th-year undergraduate at SLIIT pursuing
          a B.Sc. (Hons) in Information Technology. Passionate about Frontend
          Development, Software Engineering, and building modern, accessible,
          high-performance web applications. Strong foundation in React,
          TypeScript, UI/UX principles, automated testing, and problem-solving.
          Always eager to learn cutting-edge technologies and contribute to
          real-world projects.
        </div>

        {/* Contact card */}
        <aside className="md:w-[35%] w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 space-y-5">
          <a
            href="https://www.google.com/maps/place/Matara,+Sri+Lanka"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[#06B6D4] hover:text-teal-500 transition-transform transform hover:scale-110"
            aria-label="Location: Matara, Sri Lanka"
          >
            <MapPin className="w-6 h-6 flex-shrink-0" />
            <span>Matara, Sri Lanka</span>
          </a>

          <a
            href="mailto:sasinduhasarinda198@gmail.com"
            className="flex items-center gap-3 text-[#06B6D4] hover:text-teal-500 transition-transform transform hover:scale-110"
            aria-label="Email sasinduhasarinda198@gmail.com"
          >
            <Mail className="w-6 h-6 flex-shrink-0" />
            <span>sasinduhasarinda198@gmail.com</span>
          </a>

          <a
            href="tel:+94777546696"
            className="flex items-center gap-3 text-[#06B6D4] hover:text-teal-500 transition-transform transform hover:scale-110"
            aria-label="Phone +94 777 546 696"
          >
            <Phone className="w-6 h-6 flex-shrink-0" />
            <span>+94 777 546 696</span>
          </a>

          <a
            href="https://www.linkedin.com/in//sasindu-hasarinda-08957a238/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[#06B6D4] hover:text-teal-500 transition-transform transform hover:scale-110"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="w-6 h-6 flex-shrink-0" />
            <span>Sasindu Hasarinda</span>
          </a>

          <a
            href="https://github.com/it20009236"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[#06B6D4] hover:text-teal-500 transition-transform transform hover:scale-110"
            aria-label="GitHub profile"
          >
            <Github className="w-6 h-6 flex-shrink-0" />
            <span>@it20009236</span>
          </a>

          <a
            href="http://www.thecrn.com/L1397"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[#06B6D4] hover:text-teal-500 transition-transform transform hover:scale-110"
            aria-label="Portfolio website"
          >
            <Globe className="w-6 h-6 flex-shrink-0" />
            <span>View Portfolio</span>
          </a>
        </aside>
      </div>
    </section>
  );
};

export default About;
