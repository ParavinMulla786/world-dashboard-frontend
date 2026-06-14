import React, { useEffect, useState } from 'react';
import { getTotalPopulation } from '../../api/api';
import './Stats.css';

const TotalPop = () => {
  const [totalPop, setTotalPop] = useState(0);

  async function fetchData() {
    const res = await getTotalPopulation();
    setTotalPop(res);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="stat-card population-card">
      <div className="icon">🌍</div>

      <h3>Total Population</h3>

      <h2>{Number(totalPop).toLocaleString()}</h2>
    </div>
  );
};

export default TotalPop;