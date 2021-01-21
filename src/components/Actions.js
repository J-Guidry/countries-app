//import React, { Component } from "react";
import React from "react";

export default function Actions(props) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" 
      stroke="${
        props.light ? "#111517" : "#ffffff"
      }" stroke-width="3" d="M1 1l8 8 8-8"/></svg>`;
  let base64Svg = window.btoa(svg).toString();

  return (
    <div className="action">
      <div className="input-with-icon">
        <input
          onKeyDown={props.handleInput}
          placeholder="Search for a country..."
          className="input"
          required
        />
        <i className="icon-search"></i>
      </div>
      <select
        onChange={props.regionSelect}
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
