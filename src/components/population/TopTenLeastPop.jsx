import React, { useEffect, useState } from "react";
import { getTopTenLeastPopulatedCountries } from "../../api/api";
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

const TopTenLeastPop = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getTopTenLeastPopulatedCountries();
      setCountries(res || []);
    }

    fetchData();
  }, []);

  return (
    <div className="chart-card">
      <h2 className="chart-title">
        🌎 Top 10 Least Populated Countries
      </h2>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={countries}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="Name" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="Population"
              fill="#ef4444"
              radius={[8, 8, 0, 0]}
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopTenLeastPop;