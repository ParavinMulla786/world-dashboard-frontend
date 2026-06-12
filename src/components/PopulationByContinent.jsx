import React, { useEffect, useState } from 'react';
import { getPopulationByContinent } from '../api/api';
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell
} from "recharts";

function PopulationByContinent() {

    const [data, setData] = useState([]);
    const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AF19FF",
  "#FF4560",
  "#26A69A"
];

    async function fetchData() {
        const res = await getPopulationByContinent();

        // Convert string population to number
        const formattedData = res.map(item => ({
            ...item,
            totalPopulation: Number(item.totalPopulation)
        }));

        setData(formattedData);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
        <div
  style={{
    border: "1px solid black",
    padding: "15px",
    margin: "10px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    width: "750px"
  }}
>
  <h3
    style={{
      textAlign: "center",
      marginBottom: "20px"
    }}
  >
    Population By Continent
  </h3>

  <div style={{ width: 700, height: 400 }}>
    <ResponsiveContainer width="100%" height="100%">
    <PieChart>
  <Pie
    data={data}
    dataKey="totalPopulation"
    nameKey="Continent"
    cx="50%"
    cy="50%"
    outerRadius={120}
    label
  >
    {data.map((entry, index) => (
      <Cell
        key={`cell-${index}`}
        fill={COLORS[index % COLORS.length]}
      />
    ))}
  </Pie>

  <Tooltip />
  <Legend />
</PieChart>
    </ResponsiveContainer>
  </div>
</div>
        </>
    );
}

export default PopulationByContinent;