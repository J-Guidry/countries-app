//import React, { Component } from "react";
import React from "react";

export default class Actions extends React.Component {
  constructor(props) {
    super(props);
    this.handleRegionSelect = this.handleRegionSelect.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(evt) {
    console.log(evt.target);
  }

  handleRegionSelect(evt) {
    console.log("testing");
    console.log(evt.target.value);
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
  }

  render() {
    return (
      <div className="action">
        <div className="input-with-icon">
          <input
            onChange={this.handleInput}
            placeholder="Search for a country..."
            className="input"
          />
          <span className="icon-search"></span>
        </div>
        <select onChange={this.handleRegionSelect} className="select-country">
          <option>Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    );
  }
}
