import React, { useEffect, useState } from 'react';
import { getTotalLanguages } from '../api/api';

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
        <div>
            Total Languages : {languages}
        </div>
    );
}

export default TotalLanguages;