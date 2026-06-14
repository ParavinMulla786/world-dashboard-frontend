import React, { useEffect, useState } from "react";
import { getLowestLifeExpectancyCountries } from "../../api/api";

function LowestLifeExpectancyCountries() {

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getLowestLifeExpectancyCountries();
                setCountries(res || []);
            } catch (error) {
                console.error(error);
                setCountries([]);
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
                ⚠️ Lowest Life Expectancy Countries
            </h2>

            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
                <thead>
                    <tr style={{ backgroundColor: "#dc2626", color: "white" }}>
                        <th style={{ padding: "12px" }}>Country</th>
                        <th style={{ padding: "12px" }}>Population</th>
                        <th style={{ padding: "12px" }}>Life Expectancy</th>
                    </tr>
                </thead>

                <tbody>
                    {countries.length === 0 ? (
                        <tr>
                            <td colSpan="3" style={{ padding: "20px", textAlign: "center" }}>
                                No data available
                            </td>
                        </tr>
                    ) : (
                        countries.map((c) => (
                            <tr
                                key={c.Name}
                                style={{ textAlign: "center", borderBottom: "1px solid #ddd" }}
                            >
                                <td style={{ padding: "10px" }}>{c.Name}</td>
                                <td style={{ padding: "10px" }}>
                                    {c.Population?.toLocaleString() || "N/A"}
                                </td>
                                <td style={{ padding: "10px" }}>
                                    {c.LifeExpectancy} years
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default LowestLifeExpectancyCountries;