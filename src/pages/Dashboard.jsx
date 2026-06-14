import TotalPop from "../components/stats/TotalPop";
import TotalContriesCount from "../components/stats/TotalContriesCount";
import TotalCities from "../components/stats/TotalCities";
import TotalLanguages from "../components/stats/TotalLanguages";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <h1 className="title">Dashboard</h1>

      <div className="cards">
        <TotalPop />
        <TotalContriesCount />
        <TotalCities />
        <TotalLanguages />
      </div>
    </>
  );
}

export default Dashboard;