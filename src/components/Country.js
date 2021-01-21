import React from "react";

const Country = (props) => (
  <li>
    <img className="flag-img" src={props.flag} alt={props.name} />
    <div className="info">
      <h2>{props.name}</h2>
      <p>Population: {props.population}</p>
      <p>Region: {props.region}</p>
      <p>Capital: {props.capital}</p>
    </div>
  </li>
);

export default Country;
