import TotalLanguages from "../components/stats/TotalLanguages";
import TopTenLanguages from "../components/languages/TopTenLanguages";
import CountryLanguages from "../components/languages/CountryLanguages";
import "./LanguagesPage.css";

function Languages() {
  return (
    <div className="lang-page">
      <h1 className="lang-header">🗣 Languages Dashboard</h1>

      {/* TOP ROW: KPI + SEARCH (HORIZONTAL) */}
      <div className="lang-top-bar">
        <TotalLanguages />
        <CountryLanguages />
      </div>

      {/* CHART SECTION */}
      <TopTenLanguages />
    </div>
  );
}

export default Languages;