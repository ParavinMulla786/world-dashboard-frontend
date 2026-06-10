import React from 'react'

function StatsCards() {
  return (
    <>
     <div className="row mt-4">
      <div className="col-md-4">
        <div className="card shadow text-center">
          <div className="card-body">
            {/* <h3> :- {countries.length}</h3> */}
            <p>Total Countries</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card shadow text-center">
          <div className="card-body">
            <h3>7</h3>
            <p>Continents</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card shadow text-center">
          <div className="card-body">
            <h3>🌎</h3>
            <p>World Data</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default StatsCards