import TopTenPop from "../components/population/TopTenPop";
import TopTenLeastPop from "../components/population/TopTenLeastPop";
import PopulationByContinent from "../components/population/PopulationByContinent";
import PopulationByCountry from "../components/population/PopulationByCountry";
import CountriesByPopulation from "../components/population/CountriesByPopulation";
import CountriesLessPopulation from "../components/population/CountriesLessPopulation";
import AveragePopulation from "../components/stats/AveragePopulation";
import "./Dashboard.css";
import TotalPop from "../components/stats/TotalPop";

function Population() {
  return (
    <div className="population-page">

      {/* HEADER */}
      <div className="page-header">
        <h1>🌍 Population Dashboard</h1>
        <p>World population analytics and insights</p>
      </div>

      {/* 🔥 TOP HORIZONTAL BAR */}
      <div className="top-bar">
        <div className="kpi-card">
          <TotalPop />
        </div>

        <div className="kpi-card">
          <AveragePopulation />
        </div>

        <div className="search-card">
          <h3>🔎 Search Country</h3>
          <PopulationByCountry />
        </div>
      </div>

      {/* CONTINENT OVERVIEW */}
      <div className="section">
        <h2>🌍 Population by Continent</h2>
        <PopulationByContinent />
      </div>

      {/* EXTREMES */}
      <div className="section">
        <h2>📊 Population Insights</h2>

        <div className="charts-grid">
          <div className="card">
            <TopTenPop />
          </div>

          <div className="card">
            <TopTenLeastPop />
          </div>
        </div>
      </div>

      {/* COUNTRY ANALYSIS */}
      <div className="section">
        <h2>🌎 Country Analysis</h2>

        <div className="grid-2">
          <div className="card">
            <CountriesByPopulation />
          </div>

          <div className="card">
            <CountriesLessPopulation />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Population;