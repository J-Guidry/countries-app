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
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" 
      stroke="${
        this.props.light ? "#111517" : "#ffffff"
      }" stroke-width="3" d="M1 1l8 8 8-8"/></svg>`;
    let base64Svg = window.btoa(svg).toString();
    return (
      <div className="action">
        <div className="input-with-icon">
          <input
            onChange={this.handleInput}
            placeholder="Search for a country..."
            className="input"
          />
          <i className="icon-search"></i>
        </div>
        <select
          onChange={this.handleRegionSelect}
          className="select-country"
          style={{
            backgroundImage: "url(data:image/svg+xml;base64," + base64Svg + ")",
          }}
        >
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
