import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import StatsCards from "../components/StatsCards";
import SearchBar from "../components/SearchBar";
import CountryTable from "../components/CountryTable";
import Footer from "../components/Footer";

function Dashboard() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dashboard/countries")
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.country_name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <Header />

      <div className="container">
        <StatsCards countries={countries} />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <CountryTable countries={filteredCountries} />
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;