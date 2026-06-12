import React, { useEffect, useState } from 'react';
import { getTopTenLeastPopulatedCountries } from '../api/api';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const TopTenLeastPop = () => {

  const [countries, setCountries] = useState([]);

  async function fetchData() {
    const res = await getTopTenLeastPopulatedCountries();
    console.log(res);
    setCountries(res);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div style={{ border:"1px solid black", padding:"10px", margin:"5px", backgroundColor:"#f5f7fa"}}>
      <h2>Top 10 Least Populated Countries</h2>

      <div style={{ width: "800px", height: "400px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={countries}>
            <XAxis dataKey="Name" /> 
            <YAxis />
            <Tooltip />
            <Bar dataKey="Population" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      </div>
    </>
  );
};

export default TopTenLeastPop;