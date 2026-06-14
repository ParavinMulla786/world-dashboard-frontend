import React, { useEffect, useState } from "react";
import { getTotalCities } from "../../api/api";
import "./Stats.css";

function TotalCities() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTotalCities();
      setCount(res);
    };

    fetchData();
  }, []);

  return (
    <div className="stat-card cities-card">
      <h3>🏙️ Total Cities</h3>
      <h1>{count.toLocaleString()}</h1>
    </div>
  );
}

export default TotalCities;