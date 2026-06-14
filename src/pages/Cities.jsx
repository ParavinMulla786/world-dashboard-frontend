import CityDetails from "../components/cities/CityDetails";
import LargestCities from "../components/cities/LargestCities";
import TotalCities from "../components/stats/TotalCities";

function Cities() {
  return (
    <div>
      <h1>🏙 Cities Dashboard</h1>

      <TotalCities />
      <LargestCities />
      <CityDetails />
    </div>
  );
}

export default Cities;