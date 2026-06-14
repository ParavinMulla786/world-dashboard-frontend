import React, { useEffect, useState } from "react";
import { getLargestCities } from "../../api/api";

function LargestCities() {

    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getLargestCities();
                setCities(res || []);
            } catch (error) {
                console.error(error);
                setCities([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <h3 style={{ textAlign: "center" }}>Loading...</h3>;
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
                🌆 Top 10 Largest Cities by Population
            </h2>

            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
                <thead>
                    <tr style={{ backgroundColor: "#1d4ed8", color: "white" }}>
                        <th style={{ padding: "12px" }}>City</th>
                        <th style={{ padding: "12px" }}>Country Code</th>
                        <th style={{ padding: "12px" }}>District</th>
                        <th style={{ padding: "12px" }}>Population</th>
                    </tr>
                </thead>

                <tbody>
                    {cities.length === 0 ? (
                        <tr>
                            <td colSpan="4" style={{ padding: "20px", textAlign: "center" }}>
                                No data available
                            </td>
                        </tr>
                    ) : (
                        cities.map((c) => (
                            <tr
                                key={c.ID}
                                style={{ textAlign: "center", borderBottom: "1px solid #ddd" }}
                            >
                                <td style={{ padding: "10px" }}>{c.Name}</td>
                                <td style={{ padding: "10px" }}>{c.CountryCode}</td>
                                <td style={{ padding: "10px" }}>{c.District}</td>
                                <td style={{ padding: "10px" }}>
                                    {c.Population.toLocaleString()}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default LargestCities;