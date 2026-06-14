import React, { useState } from "react";
import { getLanguagesByCountry } from "../api/api";

function CountryLanguages() {
  const [countryName, setCountryName] = useState("");
  const [languages, setLanguages] = useState([]);

  async function handleSearch() {
    if (!countryName.trim()) return;

    const res = await getLanguagesByCountry(countryName);
    setLanguages(res);
  }

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h2>🌍 Languages Spoken in a Country</h2>

      <input
        type="text"
        placeholder="Enter country name"
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          marginRight: "10px",
        }}
      />

      <button
        onClick={handleSearch}
        style={{
          padding: "10px 15px",
          cursor: "pointer",
        }}
      >
        Search
      </button>

      <div style={{ marginTop: "20px" }}>
        {languages.length > 0 ? (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {languages.map((lang, index) => (
              <li
                key={index}
                style={{
                  margin: "8px 0",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                {lang.Language}
              </li>
            ))}
          </ul>
        ) : (
          <p>No languages found.</p>
        )}
      </div>
    </div>
  );
}

export default CountryLanguages;