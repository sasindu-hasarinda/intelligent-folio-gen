"use client";

import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { Navigation } from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Import ThemeProvider and Toaster from your UI kit/shadcn/ui here:
import { ThemeProvider } from "./components/ui/theme-provider";
import { Toaster } from "./components/ui/toaster"; // Adjust path as needed

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <svg
      className="animate-spin h-10 w-10 text-[#06B6D4]"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-label="Loading"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8z"
      ></path>
    </svg>
  </div>
);

const AppWrapper = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <BrowserRouter>
            <div className="bg-white text-gray-900 min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-grow">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Hero />
                        <About />
                        <Education />
                        <Projects />
                        <Skills />
                        <Certifications />
                        <Contact />
                      </>
                    }
                  />
                  <Route path="*" element={<div>Page Not Found</div>} />
                </Routes>
              </main>
              <Footer />
              <Toaster />
            </div>
          </BrowserRouter>
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default AppWrapper;
