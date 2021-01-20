//import React, { Component } from "react";
import React from "react";
import Header from "./Header";
import Actions from "./Actions";
/*header
    title - no logic
    dark.light toggle switch
  action
    input
    select
  countrylist
    country
*/
export default class CountriesApp extends React.Component {
  constructor(props) {
    super(props);
    //this.handleRegionSelect = this.handleRegionSelect.bind(this);
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

  // componentDidMount() {
  //   let initCountries = ["usa", "germany", "brazil", "iceland"];
  //   initCountries.forEach((country) => {
  //     let url = new URL(`https://restcountries.eu/rest/v2/name/${country}`);
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((objdata) => {
  //         //populateUl(data[0], ul);
  //         //return resolve(firstFour);
  //         this.setState((prevState) => ({
  //           countries: prevState.countries.concat(objdata),
  //         }));
  //       });
  //   });
  // }

  toggleTheme(theme) {
    this.setState((state) => ({ lightTheme: !state.lightTheme }));
  }

  //handleRegionSelect(option) {
  // if (e.value !== "filter") {
  //   let url = new URL(
  //     `https://restcountries.eu/rest/v2/region/${selectRegion.value}`
  //   );
  //   fetch(url)
  //     .then((res) => res.json())
  //     //.then((data) => {
  //   if (listParent.firstChild !== null) {
  //     listParent.firstElementChild.remove();
  //   }
  //   const ul = document.createElement("ul");
  //   ul.setAttribute("class", "list");
  //   listParent.appendChild(ul);
  //   data.forEach(function (country) {
  //     populateUl(country, ul);
  //   });
  // });
  //}
  //}
  // this.setState((prevState) => ({
  //   countries: prevState.countries.concat(option),
  // }));
  //handleRegionSelect={this.handleRegionSelect}
  //}

  render() {
    return (
      <div id="app">
        <Header light={this.state.lightTheme} handleToggle={this.toggleTheme} />
        <main>
          <div className="container">
            <Actions />
            <ul className="output"></ul>
          </div>
        </main>
      </div>
    );
  }
}
