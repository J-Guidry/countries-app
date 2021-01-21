import React from "react";
import Country from "./Country";

const Countries = (props) => (
  <div>
    {props.countriesLength > 0 && (
      <ul className="output">
        {props.countries.map((country) => (
          <Country
            key={country.name}
            flag={country.flag}
            name={country.name}
            population={country.population
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </ul>
    )}
  </div>
);

export default Countries;
