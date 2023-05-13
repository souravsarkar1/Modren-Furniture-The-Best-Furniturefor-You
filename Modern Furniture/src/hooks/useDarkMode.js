import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [isDarkMode, setisDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setisDarkMode(!isDarkMode);
    localStorage.setItem("use-dark-mode", !isDarkMode);
  };

  useEffect(() => {
    const userPreference = JSON.parse(localStorage.getItem("use-dark-mode"));
    userPreference && setisDarkMode(userPreference);
  }, []);
  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
