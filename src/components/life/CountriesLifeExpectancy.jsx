import React, { useEffect, useState } from 'react';
import { getAverageLifeExpectancy } from '../../api/api';

function CountriesLifeExpectancy() {

    const [avg, setAvg] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAverageLifeExpectancy();

                // res = "66.49"
                setAvg(res);
            } catch (error) {
                console.error("Error fetching life expectancy:", error);
                setAvg(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                Loading Life Expectancy data...
            </div>
        );
    }

    return (
        <div style={{
            width: "400px",
            margin: "50px auto",
            padding: "20px",
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "center"
        }}>

            <h3>Average Life Expectancy</h3>

            <h2>
                {avg ? `${Number(avg).toFixed(2)} years` : "No data"}
            </h2>

        </div>
    );
}

export default CountriesLifeExpectancy;