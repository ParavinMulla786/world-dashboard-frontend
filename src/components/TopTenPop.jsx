import React, { useEffect, useState } from 'react';
import { getTopTenCounPop } from '../api/api';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const TopTenPop = () => {

  const [topTen, setTopTen] = useState([]);

  async function fetdata() {
    const res = await getTopTenCounPop();
    setTopTen(res);
  }

  useEffect(() => {
    fetdata();
  }, []);

  console.log(topTen);

  return (
    <>
    <div style={{border:"1px solid black", padding:"10px", margin:"5px", backgroundColor:"pink" }}>
      <div>Top Ten Populated Countries</div>

      <div style={{ width: "500px", height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={topTen}>
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

export default TopTenPop;