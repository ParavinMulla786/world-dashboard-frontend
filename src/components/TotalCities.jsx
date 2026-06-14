import React, { useEffect, useState } from "react";
import { getTotalCities } from "../api/api";

function TotalCities() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getTotalCities();
            setCount(res);
        };

        fetchData();
    }, []);

    return (
        <div style={{
            width: "250px",
            margin: "20px auto",
            padding: "20px",
            background: "#1d4ed8",
            color: "white",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}>
            <h3>Total Cities</h3>
            <h1>{count.toLocaleString()}</h1>
        </div>
    );
}

export default TotalCities;