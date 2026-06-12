import React, { useState } from 'react';
import { getPopulationByCountry } from '../api/api';

function PopulationByCountry() {

    const [country, setCountry] = useState('');
    const [population, setPopulation] = useState(null);

    async function handleSearch() {
        const res = await getPopulationByCountry(country);
        setPopulation(res);
    }

    return (
        <div
            style={{
                border: "1px solid #ddd",
                padding: "20px",
                margin: "10px",
                borderRadius: "12px",
                width: "450px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
        >
            <h2>Population By Country</h2>

            <input
                type="text"
                placeholder="Enter country name"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                style={{
                    padding: "10px",
                    width: "250px",
                    marginRight: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc"
                }}
            />

            <button
                onClick={handleSearch}
                style={{
                    padding: "10px 15px",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: "#007bff",
                    color: "white"
                }}
            >
                Search
            </button>

            {population && (
                <div
                    style={{
                        marginTop: "20px",
                        padding: "10px",
                        backgroundColor: "#f5f5f5",
                        borderRadius: "8px"
                    }}
                >
                    <h3>{population.Name}</h3>
                    <h4>
                        Population: {population.Population.toLocaleString()}
                    </h4>
                </div>
            )}
        </div>
    );
}

export default PopulationByCountry;