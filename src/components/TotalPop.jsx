import React, { useEffect, useState } from 'react'
import { getTotalPopulation } from '../api/api'

const TotalPop = () => {

    const [totalPop, setTotalPop] = useState()

    async function fetchData() {
        const res = await getTotalPopulation()
        setTotalPop(res)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            Total Population :  {totalPop}
           
        </div>
    )
}

export default TotalPop