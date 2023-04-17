import React, { useCallback, useState } from "react";
import "./ChangeTheme.scss";

export const ChangeTheme = () => {
  const [isDarkTheme, setisDarkTheme] = useState<boolean>(false);

  const onThemeChange = useCallback(() => {
    setisDarkTheme((prev) => !prev);
  }, []);

  return <div onClick={onThemeChange} className=" change-theme" title="Change theme">{isDarkTheme ? "🌙" : "🌞"}</div>;
};
