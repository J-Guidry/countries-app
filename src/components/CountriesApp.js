//import React, { Component } from "react";
import React from "react";
import Header from "./Header";
import Actions from "./Actions";
import Countries from "./Countries";

export default class CountriesApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRegionSelect = this.handleRegionSelect.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.state = {
      lightTheme: true,
      themes: {
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
      },
      countries: [],
    };
  }

  componentDidMount() {
    let initCountries = ["usa", "germany", "brazil", "iceland"];
    initCountries.forEach((country) => {
      let url = new URL(`https://restcountries.eu/rest/v2/name/${country}`);
      fetch(url)
        .then((res) => res.json())
        .then((objdata) => {
          this.setState((prevState) => ({
            countries: prevState.countries.concat(objdata),
          }));
        });
    });
  }

  toggleTheme(theme) {
    this.setState(
      (state) => ({ lightTheme: !state.lightTheme }),
      () => {
        console.log(this.state.themes[theme]);
        Object.entries(this.state.themes[theme]).map(([color, value]) => {
          document.documentElement.style.setProperty(color, value);
        });
      }
    );
  }

  handleRegionSelect(evt) {
    let region = evt.target.value;
    if (region !== "Filter by Region") {
      let url = new URL(`https://restcountries.eu/rest/v2/region/${region}`);
      fetch(url)
        .then((res) => res.json())
        .then((countries) => {
          this.setState((prevState) => {
            return { countries: countries };
          });
        });
    }
  }

  handleInput(evt) {
    console.log(evt.target.value);
  }

  render() {
    return (
      <div>
        <Header light={this.state.lightTheme} handleToggle={this.toggleTheme} />
        <main>
          <div className="container">
            <Actions
              light={this.state.lightTheme}
              regionSelect={this.handleRegionSelect}
              handleInput={this.handleInput}
            />
            <Countries
              countriesLength={this.state.countries.length}
              countries={this.state.countries}
            />
          </div>
        </main>
      </div>
    );
  }
}
