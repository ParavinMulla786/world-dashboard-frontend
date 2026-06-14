import React, { useEffect, useState } from 'react';
import { getTopTenCounPop } from '../../api/api';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

import "./Population.css";

const TopTenPop = () => {
  const [topTen, setTopTen] = useState([]);

  async function fetchData() {
    const res = await getTopTenCounPop();
    setTopTen(res || []);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="chart-card">
      <h3 className="chart-title">
        🌍 Top 10 Populated Countries
      </h3>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={topTen}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />

            <XAxis dataKey="Name" />
            <YAxis />

            <Tooltip />

            <Bar
              dataKey="Population"
              fill="#2563eb"
              radius={[8, 8, 0, 0]}
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopTenPop;