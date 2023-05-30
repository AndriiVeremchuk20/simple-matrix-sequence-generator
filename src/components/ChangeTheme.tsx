import React, { useCallback, useEffect, useState } from "react";

export const ChangeTheme = () => {
  const theme = localStorage.getItem("theme");
  const [isDarkTheme, setisDarkTheme] = useState<boolean>(theme === "dark");

  const onThemeChange = useCallback(() => {
    setisDarkTheme((prev) => !prev);
    localStorage.setItem("theme", isDarkTheme ? "light" : "dark");
  }, [theme]);

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.remove("dark");
    else document.documentElement.classList.add("dark");
  }, [theme]);

  return (
    <div
      onClick={onThemeChange}
      className="cursor-pointer text-2xl"
      title="Change theme"
    >
      {isDarkTheme ? "🌙" : "🌞"}
    </div>
  );
};
