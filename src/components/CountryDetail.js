import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

const CountryDetail = (props) => {
  const location = useLocation();

  let [borderCountries, updateBorders] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState(null);
  let history = useHistory();
  let country = location.state;
  let params = useParams();

  useEffect(() => {
    if (!params) return;
    const abortCont = new AbortController();
    if (history.length > 3) {
      updateBorders([]);
    }

    country.borders.forEach((countryCode, index, arr) => {
      let url = new URL(
        `https://restcountries.eu/rest/v2/alpha/${countryCode}`
      );
      setIsLoading(true);

      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          updateBorders((prevArr) => [...prevArr, data]);
          setError(null);
          if (index === arr.length - 1) {
            setIsLoading(false);
            if (arr.length > 6) {
            }
          }
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    });

    return () => abortCont.abort();
  }, [params]);

  return (
    <div className="detail-page">
      <button
        className="back-btn"
        onClick={() => {
          setIsLoading(true);
          history.goBack();
        }}
      >
        <i class="icon-arrow-left"></i>
        Back
      </button>

      <div className="country-detail-wrapper">
        <div className="flag-detail">
          <img src={country.flag} alt={`Flag of ${country.name}`} />
        </div>
        <div className="country-detail">
          <h1>{country.name}</h1>
          <div className="detail-column">
            <p>
              <span className="country-label">Native Name: </span>
              {country.nativeName}
            </p>
            <p>
              <span className="country-label">Population: </span>
              {country.population}
            </p>
            <p>
              <span className="country-label">Region: </span>
              {country.region}
            </p>
            <p>
              <span className="country-label">Sub Region: </span>
              {country.subRegion}
            </p>
            <p>
              <span className="country-label">Capital: </span>
              {country.capital}
            </p>
          </div>
          <div className="detail-column">
            <p>
              <span className="country-label">Top Level Domain: </span>
              {country.topLevelDomain.map((domain, index) => (
                <span key={index}> {domain} </span>
              ))}
            </p>
            <p>
              <span className="country-label">Currencies: </span>
              {country.currencies.map((currency, index) => (
                <span key={index}> {currency.name} </span>
              ))}
            </p>
            <p>
              <span className="country-label">Languages: </span>
              {country.languages.map((language, index) => (
                <span key={index}> {language.name} </span>
              ))}
            </p>
          </div>
          {borderCountries.length === 0 ? (
            ""
          ) : isLoading === true ? (
            <span>loading...</span>
          ) : (
            <div className="border-countries">
              <span className="country-label">Border Countries: </span>
              {borderCountries.map((borderCountry, index) => (
                <Link
                  key={index}
                  to={{
                    pathname: `/country/${borderCountry.name
                      .split(" ")
                      .join("_")
                      .toLowerCase()}`,
                    state: { ...borderCountry },
                  }}
                >
                  <span key={index} className={"border-country"}>
                    {borderCountry.name}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CountryDetail;
