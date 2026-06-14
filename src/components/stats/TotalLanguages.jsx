import React, { useEffect, useState } from 'react';
import { getTotalLanguages } from '../../api/api';
import './Stats.css';

function TotalLanguages() {
  const [languages, setLanguages] = useState(0);

  async function fetchData() {
    const res = await getTotalLanguages();
    setLanguages(res);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="stat-card languages-card">
      <h3>🗣️ Total Languages</h3>
      <h1>{languages.toLocaleString()}</h1>
    </div>
  );
}

export default TotalLanguages;