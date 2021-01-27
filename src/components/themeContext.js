import React from "react";
import { createContext, useState } from "react";

const ThemeContext = createContext();

//const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

// function toggleTheme() {
//   this.setState((state, props) => {
//     if (state.switchLabel === "Dark Mode" && props.light === true) {
//       props.handleToggle("dark");
//       return { switchLabel: "Light Mode" };
//     } else {
//       props.handleToggle("light");
//       return { switchLabel: "Dark Mode" };
//     }
//   });
// }

// function toggleTheme(theme) {
//   this.setState(
//     (state) => ({ lightTheme: !state.lightTheme }),
//     () => {
//       Object.entries(this.state.themes[theme]).map(([color, value]) => {
//         document.documentElement.style.setProperty(color, value);
//       });
//     }
//   );
// }

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
