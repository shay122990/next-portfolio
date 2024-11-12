"use client"
import React, { useState, useEffect } from "react";

export const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Set the initial theme based on the stored preference or default to light mode
    const storedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedMode);
    document.documentElement.style.setProperty(
      "--background",
      storedMode ? "#282828" : "#ebebeb"
    );
    document.documentElement.style.setProperty(
      "--foreground",
      storedMode ? "#ededed" : "#282828"
    );
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    // Update CSS variables for theme colors
    document.documentElement.style.setProperty(
      "--background",
      newMode ? "#282828" : "#ebebeb"
    );
    document.documentElement.style.setProperty(
      "--foreground",
      newMode ? "#ededed" : "#282828"
    );
    // Store the preference in local storage
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  return (
    <div className="flex items-center bg-transparent">
      <input
        type="checkbox"
        id="dark-mode-toggle"
        onChange={toggleDarkMode}
        checked={darkMode}
        className="hidden"
      />
      <label
        htmlFor="dark-mode-toggle"
        className={`relative w-16 h-8 block rounded-full cursor-pointer transition-all duration-300 shadow-inner 
        ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}
      >
        <span
          className={`absolute w-6 h-6 rounded-full top-1 left-1 transition-all duration-300 transform 
          ${darkMode ? "translate-x-8 bg-gradient-to-r from-blue-700 to-red-400" : "bg-gradient-to-r from-orange-400 to-yellow-300"}`}
        ></span>
        <i className={`absolute text-white text-lg left-1 top-1 ${darkMode ? "hidden" : "inline-block"}`}>
          <i className="fa-solid fa-sun"></i>
        </i>
        <i className={`absolute text-white text-lg right-1 top-1 ${darkMode ? "inline-block" : "hidden"}`}>
          <i className="fa-solid fa-moon"></i>
        </i>
      </label>
    </div>
  );
};
