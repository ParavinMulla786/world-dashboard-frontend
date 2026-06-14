import React, { useState } from "react";
import { getCountriesByMinPopulation } from "../../api/api";
import "./Population.css";

function CountriesByPopulation() {
  const [minPop, setMinPop] = useState("");
  const [countries, setCountries] = useState([]);

  const handleSearch = async () => {
    const res = await getCountriesByMinPopulation(minPop);
    setCountries(res || []);
  };

  return (
    <div className="search-card">
      <h2 className="search-title">
        🌍 Countries with Population &gt; X
      </h2>

      <div className="search-box">
        <input
          type="number"
          placeholder="Enter population"
          value={minPop}
          onChange={(e) => setMinPop(e.target.value)}
          className="search-input"
        />

        <button
          onClick={handleSearch}
          className="search-btn blue-btn"
        >
          Search
        </button>
      </div>

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
              <tr key={c.Name}>
                <td>{c.Name}</td>
                <td>{Number(c.Population).toLocaleString()}</td>
                <td>{c.CountryCode}</td>
                <td>{c.Continent}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CountriesByPopulation;