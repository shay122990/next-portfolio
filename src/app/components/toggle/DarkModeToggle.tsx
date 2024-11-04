"use client"
import React, { useState } from "react";

export const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`flex items-center ${darkMode ? "bg-gray-900" : "bg-white"}`}>
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
