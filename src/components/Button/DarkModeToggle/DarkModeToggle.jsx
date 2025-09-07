import { useState, useEffect } from "react";
import ButtonToggle from "../ButtonToggle.jsx";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <ButtonToggle isActive={darkMode} onToggle={() => setDarkMode(!darkMode)} activeLabel="Toggle Theme" inactiveLabel="Toggle Theme" />
  );
}

export default DarkModeToggle;
