//import React, { Component } from "react";
import React from "react";
import Actions from "./Actions";
import Countries from "./Countries";

export default class CountriesApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRegionSelect = this.handleRegionSelect.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
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

  handleRegionSelect(evt) {
    let region = evt.target.value;
    if (region !== "Filter by Region") {
      let url = new URL(`https://restcountries.eu/rest/v2/region/${region}`);
      fetch(url)
        .then((res) => res.json())
        .then((countries) => {
          this.setState(() => {
            return { countries: countries };
          });
        });
    }
  }

  handleInput(evt) {
    if (evt.key === "Enter") {
      const input = evt.target.value;
      const url = new URL(`https://restcountries.eu/rest/v2/name/${input}`);
      fetch(url)
        .then((res) => res.json())
        .then((country) => {
          this.setState(() => {
            return { countries: country };
          });
        })
        .then((err) => err);
    }
  }

  render() {
    return (
      <div>
        <main>
          <div className="container">
            <Actions
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
