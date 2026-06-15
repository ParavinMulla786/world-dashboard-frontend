import CountriesLifeExpectancy from "../components/life/CountriesLifeExpectancy";
import TopLifeExpectancyCountries from "../components/life/TopLifeExpectancyCountries";
import LowestLifeExpectancyCountries from "../components/life/LowestLifeExpectancyCountries";
import "./Dashboard.css";

function LifeExpectancy() {
  return (
    <div>
      <div className="page-header">
      <h1>Life Expectancy Dashboard</h1>
</div>
      <CountriesLifeExpectancy />
      <TopLifeExpectancyCountries />
      <LowestLifeExpectancyCountries />
    </div>
  );
}

export default LifeExpectancy;