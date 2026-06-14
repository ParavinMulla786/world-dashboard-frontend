import React, { useEffect, useState } from 'react';
import { getPopulationByContinent } from '../../api/api';
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell
} from "recharts";

import "./Population.css";

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
    <div className="chart-card">
      <h3 className="chart-title">
        🌍 Population By Continent
      </h3>

      <div className="chart-container">
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
  );
}

export default PopulationByContinent;