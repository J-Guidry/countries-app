import React, { Component, useState, useContext } from "react";
import { ThemeContext } from "../components/themeContext";

const Header = () => {
  const [label, switchLabel] = useState("Light Mode");
  const themeObj = useContext(ThemeContext);

  function toggleTheme() {
    switchLabel((prevState) => {
      if (prevState === "Dark Mode") {
        themeObj.toggleThemeBool();
        themeObj.toggleTheme("light");
        return "Light Mode";
      } else {
        themeObj.toggleThemeBool();
        themeObj.toggleTheme("dark");
        return "Dark Mode";
      }
    });
  }

  return (
    <header className="header">
      <h1>Where in the world?</h1>

      <button className="mode" onClick={toggleTheme}>
        <i
          className={themeObj.themeBool.lightTheme ? "icon-sun" : "icon-moon-o"}
        ></i>
        <span className="mode-label">{label}</span>
      </button>
    </header>
  );
};

export default Header;
