import React, { useState, useEffect } from "react";
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); 
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="btn btn-primary m-4"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      {children}
    </div>
  );
};

export default ThemeProvider;
