import React, { useEffect, useState } from 'react';
import { getTotalCountries } from '../../api/api';
import './Stats.css';

const TotalContriesCount = () => {
  const [tc, setTotalCountry] = useState(0);

  async function fetchData() {
    const res = await getTotalCountries();
    setTotalCountry(res);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="stat-card countries-card">
      <h3>🌍 Total Countries</h3>
      <h2>{tc}</h2>
    </div>
  );
};

export default TotalContriesCount;