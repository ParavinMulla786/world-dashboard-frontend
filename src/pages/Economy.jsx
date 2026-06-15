import CountriesGDPPerCapita from "../components/economy/CountriesGDPPerCapita";

function Economy() {
  return (
    <div>
       <div className="page-header">
      <h1>Economy Dashboard</h1>
      </div>

      <CountriesGDPPerCapita />
    </div>
  );
}

export default Economy;