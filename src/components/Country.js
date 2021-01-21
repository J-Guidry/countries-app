import React from "react";

const Country = (props) => (
  <li>
    <div className="flag">
      <img
        className="flag-img"
        src={props.flag}
        alt={`Flag of ${props.name}`}
      />
    </div>
    <div className="info">
      <h3>{props.name}</h3>
      <p>
        {" "}
        <span className="country-label">Population:</span> {props.population}
      </p>
      <p>
        {" "}
        <span className="country-label">Region:</span> {props.region}
      </p>
      <p>
        {" "}
        <span className="country-label">Capital:</span> {props.capital}
      </p>
    </div>
  </li>
);

export default Country;
