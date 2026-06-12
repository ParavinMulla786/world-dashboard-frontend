import React, { useEffect, useState } from 'react';
import { getTopTenLanguages } from '../api/api';

function TopTenLanguages() {
  const [languages, setLanguages] = useState([]);

  async function fetchData() {
    const res = await getTopTenLanguages();
    setLanguages(res);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        width: "500px",
        padding: "20px",
        margin: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "15px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#333"
        }}
      >
        🗣️ Top 10 Languages
      </h2>

      {languages.map((lang, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 15px",
            marginBottom: "10px",
            backgroundColor: "#f8f9fa",
            borderRadius: "10px"
          }}
        >
          <div>
            <span
              style={{
                backgroundColor: "#4f46e5",
                color: "white",
                padding: "4px 10px",
                borderRadius: "20px",
                marginRight: "10px",
                fontSize: "14px"
              }}
            >
              #{index + 1}
            </span>

            <strong>{lang.Language}</strong>
          </div>

          <span
            style={{
              fontWeight: "bold",
              color: "#555"
            }}
          >
            {lang.Count}
          </span>
        </div>
      ))}
    </div>
  );
}

export default TopTenLanguages;