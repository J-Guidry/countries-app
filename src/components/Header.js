import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.state = {
      switchLabel: "Dark Mode",
    };
  }

  toggleTheme() {
    console.log(this);
    this.setState((state, props) => {
      if (state.switchLabel === "Dark Mode" && props.light === true) {
        props.handleToggle("light");
        return { switchLabel: "Light Mode" };
      } else {
        props.handleToggle("dark");
        return { switchLabel: "Dark Mode" };
      }
    });
  }
  render() {
    return (
      <header className="header">
        <h1>Where in the world?</h1>
        <button className="mode" onClick={this.toggleTheme}>
          <i className={this.props.light ? "icon-moon-o" : "icon-sun"}></i>
          <span className="mode-label">{this.state.switchLabel}</span>
        </button>
      </header>
    );
  }
}

//logic will be to toggle theme style
