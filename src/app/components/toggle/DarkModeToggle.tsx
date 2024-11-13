"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes"; 

export const DarkModeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (theme !== undefined) {
      setIsDark(theme === "dark");
    }
  }, [theme]);
  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    setIsDark(!isDark); 
  };

  return (
    <div className="flex items-center bg-transparent">
      <input
        type="checkbox"
        id="dark-mode-toggle"
        onChange={toggleTheme}
        checked={isDark}
        className="hidden"
      />
      <label
        htmlFor="dark-mode-toggle"
        className={`relative w-16 h-8 block rounded-full cursor-pointer transition-all duration-300 shadow-inner ${
          isDark ? "bg-gray-300" : "bg-gray-500"
        }`}
      >
        <span
          className={`absolute w-6 h-6 rounded-full top-1 left-1 transition-all duration-300 transform ${
            isDark ? "translate-x-8 bg-gradient-to-r from-blue-700 to-red-400" : "bg-gradient-to-r from-orange-400 to-yellow-300"
          }`}
        ></span>
        <i className={`absolute text-white text-lg left-1 top-1 ${isDark ? "hidden" : "inline-block"}`}>
          <i className="fa-solid fa-sun"></i>
        </i>
        <i className={`absolute text-white text-lg right-1 top-1 ${isDark ? "inline-block" : "hidden"}`}>
          <i className="fa-solid fa-moon"></i>
        </i>
      </label>
    </div>
  );
};
