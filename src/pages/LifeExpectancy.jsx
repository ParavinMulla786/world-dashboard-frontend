import CountriesLifeExpectancy from "../components/life/CountriesLifeExpectancy";
import TopLifeExpectancyCountries from "../components/life/TopLifeExpectancyCountries";
import LowestLifeExpectancyCountries from "../components/life/LowestLifeExpectancyCountries";

function LifeExpectancy() {
  return (
    <div>
      <h1>❤️ Life Expectancy Dashboard</h1>

      <CountriesLifeExpectancy />
      <TopLifeExpectancyCountries />
      <LowestLifeExpectancyCountries />
    </div>
  );
}

export default LifeExpectancy;