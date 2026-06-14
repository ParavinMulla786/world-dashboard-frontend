import React, { useEffect, useState } from 'react';
import { getCountriesGDPPerCapita } from '../../api/api';

function CountriesGDPPerCapita() {

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getCountriesGDPPerCapita();
                setCountries(res || []);
            } catch (error) {
                console.error("Error fetching data:", error);
                setCountries([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                Loading GDP data...
            </div>
        );
    }

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
                💰 Countries GDP Per Capita
            </h2>

            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
                <thead>
                    <tr style={{ backgroundColor: "#4F46E5", color: "white" }}>
                        <th style={{ padding: "12px" }}>Country</th>
                        <th style={{ padding: "12px" }}>Population</th>
                        <th style={{ padding: "12px" }}>GNP</th>
                        <th style={{ padding: "12px" }}>GDP Per Capita</th>
                    </tr>
                </thead>

                <tbody>
                    {countries.length === 0 ? (
                        <tr>
                            <td colSpan="4" style={{ padding: "20px" }}>
                                No data available
                            </td>
                        </tr>
                    ) : (
                        countries.map((country) => (
                            <tr
                                key={country.Code || country.Name}
                                style={{
                                    borderBottom: "1px solid #ddd",
                                    textAlign: "center"
                                }}
                            >
                                <td style={{ padding: "10px" }}>{country.Name}</td>
                                <td style={{ padding: "10px" }}>
                                    {country.Population?.toLocaleString?.() || "N/A"}
                                </td>
                                <td style={{ padding: "10px" }}>{country.GNP || "N/A"}</td>
                                <td style={{ padding: "10px" }}>{country.GDPPerCapita || "N/A"}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default CountriesGDPPerCapita;   