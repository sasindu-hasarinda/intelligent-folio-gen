"use client";

import React, { ReactNode, useEffect, useState } from "react";

interface ThemeProviderProps {
  attribute?: string;
  defaultTheme?: "light" | "dark" | "system";
  enableSystem?: boolean;
  children: ReactNode;
}

const ThemeProvider = ({
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  children,
}: ThemeProviderProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const root = window.document.documentElement;
    const storedTheme = window.localStorage.getItem("theme");

    function applyTheme(theme: string) {
      if (attribute === "class") {
        root.classList.remove("light", "dark");
        root.classList.add(theme);
      } else {
        root.setAttribute(attribute, theme);
      }
    }

    if (storedTheme) {
      applyTheme(storedTheme);
    } else if (enableSystem) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      applyTheme(prefersDark ? "dark" : "light");
    } else {
      applyTheme(defaultTheme);
    }
  }, [attribute, defaultTheme, enableSystem]);

  if (!mounted) {
    // Avoid hydration mismatch by rendering nothing on the server
    return null;
  }

  return <>{children}</>;
};

export { ThemeProvider };
