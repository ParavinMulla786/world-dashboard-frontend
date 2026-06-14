import React, { useEffect, useState } from "react";
import { getAveragePopulation } from "../../api/api";
import "./Stats.css";

function AveragePopulation() {
  const [avgPop, setAvgPop] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res = await getAveragePopulation();
      setAvgPop(res || 0);
    }

    fetchData();
  }, []);

  return (
    <div className="stat-card average-card">
      <div className="icon">📊</div>

      <h3>Average Population</h3>

      <h2>{Number(avgPop).toLocaleString()}</h2>
    </div>
  );
}

export default AveragePopulation;