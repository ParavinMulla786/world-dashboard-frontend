import React, { useState } from 'react';
import { getPopulationByCountry } from '../../api/api';
import "./Population.css";

function PopulationByCountry() {
  const [country, setCountry] = useState('');
  const [population, setPopulation] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    if (!country.trim()) return;

    setLoading(true);
    const res = await getPopulationByCountry(country);
    setPopulation(res);
    setLoading(false);
  }

  return (
    <div className="search-card country-card">
      <h2 className="search-title">
        🌍 Population By Country
      </h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter country name"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="search-input"
        />

        <button
          onClick={handleSearch}
          className="search-btn blue-btn"
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </div>

      {population && (
        <div className="result-card">
          <h3>{population.Name}</h3>

          <p>
            <strong>Population:</strong>{" "}
            {Number(population.Population).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
}

export default PopulationByCountry;