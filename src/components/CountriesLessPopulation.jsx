import React, { useState } from "react";
import { getCountriesWithLessPopulation } from "../api/api";

function CountriesLessPopulation() {

    const [maxPop, setMaxPop] = useState("");
    const [countries, setCountries] = useState([]);

    const handleSearch = async () => {
        const res = await getCountriesWithLessPopulation(maxPop);
        setCountries(res);
    };

    return (
        <div style={{
            width: "900px",
            margin: "20px auto",
            padding: "20px",
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}>
            <h2 style={{ textAlign: "center" }}>
                🌍 Countries with Population &lt; X
            </h2>

            <div style={{ textAlign: "center", marginBottom: "15px" }}>
                <input
                    type="number"
                    placeholder="Enter max population"
                    value={maxPop}
                    onChange={(e) => setMaxPop(e.target.value)}
                    style={{
                        padding: "10px",
                        width: "200px",
                        marginRight: "10px"
                    }}
                />

                <button
                    onClick={handleSearch}
                    style={{
                        padding: "10px 15px",
                        background: "#dc2626",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer"
                    }}
                >
                    Search
                </button>
            </div>

            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ background: "#16a34a", color: "white" }}>
                        <th>Country</th>
                        <th>Population</th>
                        <th>Code</th>
                        <th>Continent</th>
                    </tr>
                </thead>

                <tbody>
                    {countries.length === 0 ? (
                        <tr>
                            <td colSpan="4" style={{ textAlign: "center", padding: "15px" }}>
                                No data available
                            </td>
                        </tr>
                    ) : (
                        countries.map((c) => (
                            <tr key={c.Name} style={{ textAlign: "center" }}>
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
    );
}

export default CountriesLessPopulation;