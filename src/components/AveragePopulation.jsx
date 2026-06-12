import React, { useEffect, useState } from 'react';
import { getAveragePopulation } from '../api/api';

function AveragePopulation() {

    const [avgPop, setAvgPop] = useState();

    async function fetchData() {
        const res = await getAveragePopulation();
        console.log("Average Population:", res);
        setAvgPop(res);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div>Average Population : {avgPop} </div>
            
        </div>
    );
}

export default AveragePopulation;