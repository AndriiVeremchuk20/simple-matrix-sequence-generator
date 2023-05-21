import React, { useCallback, useState } from "react";


export const ChangeTheme = () => {
  const [isDarkTheme, setisDarkTheme] = useState<boolean>(false);

  const onThemeChange = useCallback(() => {
    setisDarkTheme((prev) => !prev);
  }, []);

  return <div onClick={onThemeChange} className="text-3xl" title="Change theme">{isDarkTheme ? "🌙" : "🌞"}</div>;
};
