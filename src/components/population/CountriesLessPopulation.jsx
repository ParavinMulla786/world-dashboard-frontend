import React, { useState } from "react";
import { getCountriesWithLessPopulation } from "../../api/api";

function CountriesLessPopulation() {
  const [maxPop, setMaxPop] = useState("");
  const [countries, setCountries] = useState([]);

  const handleSearch = async () => {
    if (!maxPop) return;

    const res = await getCountriesWithLessPopulation(maxPop);
    setCountries(res || []);
  };

  return (
    <div className="chart-card country-card">
      <h2 className="chart-title">
        🌍 Countries with Population &lt; X
      </h2>

      {/* SEARCH BOX */}
      <div className="search-box">
        <input
          type="number"
          placeholder="Enter max population"
          value={maxPop}
          onChange={(e) => setMaxPop(e.target.value)}
          className="search-input"
        />

        <button className="search-btn red-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* TABLE */}
      <div className="table-wrapper">
        <table className="country-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Population</th>
              <th>Code</th>
              <th>Continent</th>
            </tr>
          </thead>

          <tbody>
            {countries.length === 0 ? (
              <tr>
                <td colSpan="4" className="no-data">
                  No data available
                </td>
              </tr>
            ) : (
              countries.map((c) => (
                <tr key={c.CountryCode}>
                  <td>{c.Name}</td>
                  <td>{c.Population.toLocaleString()}</td>
                  <td>{c.CountryCode}</td>
                  <td>{c.Continent}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountriesLessPopulation;