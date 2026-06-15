import CityDetails from "../components/cities/CityDetails";
import LargestCities from "../components/cities/LargestCities";
import TotalCities from "../components/stats/TotalCities";

function Cities() {
  return (
    <div>
      <div className="page-header">
      <h1> Cities Dashboard</h1>
         </div>
      <TotalCities />
       <CityDetails />
      <LargestCities />
     
    </div>
  );
}

export default Cities;