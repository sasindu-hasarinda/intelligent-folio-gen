
import React, { useState, useEffect } from "react";

const navLinks = [
  { name: "home", label: "Home" },
  { name: "about", label: "About" },
  { name: "experience", label: "Experience" },
  { name: "education", label: "Education" },
  { name: "projects", label: "Projects" },
  { name: "skills", label: "Skills" },
  { name: "contact", label: "Contact" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const updateActiveSection = () => {
      const hash = window.location.hash.replace("#", "") || "about";
      setActiveSection(hash.toLowerCase());
    };

    updateActiveSection(); // Set initially on mount

    window.addEventListener("hashchange", updateActiveSection);
    return () => {
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          aria-label="Home"
          className="text-3xl font-extrabold text-[#0f766e]"
          onClick={() => setActiveSection("home")}
        >
          SH
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.name}`}
                className={
                  "font-semibold text-[#1f2937] transition duration-200 " +
                  (activeSection === link.name
                    ? "font-bold border-b-2 border-teal-600 pb-1"
                    : "hover:text-teal-600 hover:underline")
                }
                aria-current={activeSection === link.name ? "page" : undefined}
                onClick={() => setActiveSection(link.name)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu - optional */}
        <div className="md:hidden">
          {/* Implement mobile menu button here if needed */}
        </div>
      </nav>
    </header>
  );
};
