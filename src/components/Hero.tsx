import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profile from "../images/profile.png";

const fallbackInitials = "SH";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const buttonHover = {
  scale: 1.05,
  boxShadow: "0 10px 15px rgba(6, 182, 212, 0.5)",
};

const iconHover = {
  scale: 1.2,
  color: "#0d9488",
  transition: { type: "spring" as any, stiffness: 300 },
};

const Hero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [imgError, setImgError] = useState(false);
  const [taglineProgress, setTaglineProgress] = useState("");
  const fullTagline = "IT & Quality Assurance Professional • Associate / Executive – Data Analyst";

  useEffect(() => {
    // Typewriter effect for tagline
    let timer: NodeJS.Timeout;
    if (taglineProgress.length < fullTagline.length) {
      timer = setTimeout(() => {
        setTaglineProgress(fullTagline.slice(0, taglineProgress.length + 1));
      }, 100);
    }
    return () => clearTimeout(timer);
  }, [taglineProgress]);

  const cvHref = "/Sasindu_Hasarinda_CV.pdf";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 pt-20 md:pt-28 pb-16 bg-cyan-100 overflow-hidden"
      aria-label="Introduction section"
    >
      {/* Subtle rotating gradient blob */}
      <div
        aria-hidden="true"
        className="absolute rounded-full w-[400px] h-[400px] bg-gradient-to-tr from-teal-300 to-cyan-300 opacity-10 animate-spin-slow -top-20 -left-20"
      />

      {/* Profile Image Container */}
      <motion.div
        className="rounded-full shadow-lg border-2 border-transparent hover:border-teal-500 cursor-pointer flex-shrink-0 mb-8 md:mb-0 md:mr-16 flex items-center justify-center"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={fadeUpVariants}
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px #06B6D4" }}
        transition={{ type: "spring", stiffness: 140, damping: 15, delay: 0.2 }}
        style={{ width: 280, height: 280 }}
      >
        {!imgError ? (
          <img
            src={profile}
            alt="Sasindu Hasarinda Profile"
            onError={() => setImgError(true)}
            className="w-[280px] h-[280px] rounded-full object-cover object-center shadow-md select-none"
            loading="lazy"
            draggable={false}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <div className="w-[280px] h-[280px] rounded-full bg-teal-500 flex items-center justify-center">
            <span className="text-7xl font-extrabold text-white select-none">
              {fallbackInitials}
            </span>
          </div>
        )}
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="max-w-xl flex flex-col items-center md:items-start text-center md:text-left relative z-10"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {/* Name */}
        <motion.h1
          className="text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-700 mb-2 select-text"
          tabIndex={0}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Sasindu Hasarinda
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-2xl font-semibold text-teal-600 mb-6 h-8 min-h-[32px] select-text"
          tabIndex={0}
          aria-label={fullTagline}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {taglineProgress}
          <span className="blinking-cursor" aria-hidden="true">
            |
          </span>
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-gray-600 text-lg max-w-lg mb-8 select-text"
          tabIndex={0}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Ensuring software quality, optimizing processes, and delivering
          reliable IT support with precision and attention to detail.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex space-x-8 mb-10 text-teal-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          {[
            {
              href: "https://github.com/sasinduhasarinda",
              label: "GitHub",
              icon: <Github size={30} />,
            },
            {
              href: "https://www.linkedin.com/in//sasindu-hasarinda-08957a238/",
              label: "LinkedIn",
              icon: <Linkedin size={30} />,
            },
            {
              href: "mailto:sasinduhasarinda1998@gmail.com",
              label: "Email",
              icon: <Mail size={30} />,
            },
          ].map(({ href, label, icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-teal-500 shadow-lg rounded-full p-3 transition cursor-pointer"
              whileHover={iconHover}
              tabIndex={0}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex space-x-4 w-full max-w-3xl justify-center md:justify-start bg-cyan-50 p-4 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          {/* View Projects */}
          <motion.a
            href="#projects"
            className="h-12 rounded-full bg-[#0d9488] text-white font-bold shadow-lg transition px-6 flex items-center justify-center select-none cursor-pointer text-center"
            whileHover={buttonHover}
            tabIndex={0}
          >
            View Projects
          </motion.a>

          {/* Get In Touch */}
          <motion.a
            href="#contact"
            className="h-12 rounded-full bg-white border-2 border-[#0d9488] text-[#0d9488] font-bold shadow-lg transition px-6 flex items-center justify-center select-none cursor-pointer text-center clean-button"
            whileHover={buttonHover}
            tabIndex={0}
          >
            Get In Touch
          </motion.a>

          {/* Download CV */}
          <motion.a
            href={cvHref}
            download
            className="h-12 rounded-full bg-[#0d9488] text-white font-bold shadow-lg transition px-6 flex items-center justify-center select-none cursor-pointer text-center"
            aria-label="Download CV"
            whileHover={buttonHover}
            tabIndex={0}
          >
            <span className="mr-2">Download CV</span>
            <Download size={20} />
          </motion.a>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-teal-600 cursor-pointer select-none"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
            focusable="false"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span className="sr-only">Scroll down</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

/* CSS (can be included in global CSS or CSS module)
.blinking-cursor {
  animation: blink 1s steps(2, start) infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
*/
