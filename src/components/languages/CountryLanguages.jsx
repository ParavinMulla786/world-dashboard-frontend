import React, { useState } from "react";
import { getLanguagesByCountry } from "../../api/api";
import "./Languages.css";

function CountryLanguages() {
  const [countryName, setCountryName] = useState("");
  const [languages, setLanguages] = useState([]);

  async function handleSearch() {
    if (!countryName.trim()) return;

    const res = await getLanguagesByCountry(countryName);
    setLanguages(res || []);
  }

  return (
    <div className="language-page">
      <h2 className="language-title">🌍 Languages Spoken in a Country</h2>

      <div className="language-search">
        <input
          type="text"
          placeholder="Enter country name"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
          className="language-input"
        />

        <button onClick={handleSearch} className="language-btn">
          Search
        </button>
      </div>

      <div className="language-result">
        {languages.length > 0 ? (
          <ul className="language-list">
            {languages.map((lang, index) => (
              <li key={index} className="language-item">
                {lang.Language}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-data">No languages found.</p>
        )}
      </div>
    </div>
  );
}

export default CountryLanguages;