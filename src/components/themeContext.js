import React from "react";
import { createContext, useState } from "react";

const ThemeContext = createContext();
const ThemeConsumer = ThemeContext.Consumer;

const ThemeProvider = ({ children }) => {
  const [themeBool, toggleThemeBool] = useState({
    lightTheme: true,
  });
  const themes = {
    light: {
      "--background": "hsl(0, 0%, 98%)",
      "--elements": "hsl(0, 0%, 100%)",
      "--text": "hsl(200, 15%, 8%)",
    },
    dark: {
      "--background": " hsl(207, 26%, 17%)",
      "--elements": "hsl(209, 23%, 22%)",
      "--text": "hsl(0, 0%, 100%)",
    },
  };
  const value = {
    themeBool,
    toggleThemeBool: () =>
      toggleThemeBool((prevState) => {
        return {
          lightTheme: !prevState.lightTheme,
        };
      }),
    toggleTheme: (theme) => {
      Object.entries(themes[theme]).map(([color, value]) => {
        document.documentElement.style.setProperty(color, value);
      });
    },
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeConsumer, ThemeContext };

//export default AppProvider;
