import React, { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,   // ✅ ADD THIS
    ResponsiveContainer
} from "recharts";
import { getTopLifeExpectancyCountries } from "../../api/api";

function TopLifeExpectancyChart() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getTopLifeExpectancyCountries();
            setData(res || []);
        };

        fetchData();
    }, []);

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
                🌍 Life Expectancy (Top Countries)
            </h2>

            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Name" />
                    <YAxis />

                    {/* ✅ HOVER TOOLTIP ADDED */}
                    <Tooltip />

                    <Bar
                        dataKey="LifeExpectancy"
                        fill="#16a34a"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default TopLifeExpectancyChart;