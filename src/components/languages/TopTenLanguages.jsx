import React, { useEffect, useState } from "react";
import { getTopTenLanguages } from "../../api/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import "./Languages.css";

function TopTenLanguages() {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getTopTenLanguages();
      setLanguages(res || []);
    }
    fetchData();
  }, []);

  // 🎨 Professional color palette
  const COLORS = [
    "#3b82f6",
    "#22c55e",
    "#f59e0b",
    "#ef4444",
    "#a855f7",
    "#06b6d4",
    "#f97316",
    "#84cc16",
    "#ec4899",
    "#14b8a6",
  ];

  return (
    <div className="chart-card">
      <h2 className="chart-title">🗣️ Top 10 Languages</h2>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={languages}
            layout="vertical"
            margin={{ top: 10, right: 20, left: 40, bottom: 10 }}
          >
            <XAxis type="number" stroke="#94a3b8" />
            <YAxis
              type="category"
              dataKey="Language"
              stroke="#e5e7eb"
              width={120}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#111c2e",
                border: "1px solid #1f2a44",
                borderRadius: "8px",
                color: "#fff",
              }}
            />

            <Bar dataKey="Count" barSize={14} radius={[0, 6, 6, 0]}>
              {languages.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TopTenLanguages;