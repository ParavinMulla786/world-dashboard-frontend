import React, { useState } from "react";
import { getCityByName } from "../../api/api";

function CityDetails() {
  const [cityName, setCityName] = useState("");
  const [city, setCity] = useState(null);

  const handleSearch = async () => {
    const data = await getCityByName(cityName);
    setCity(data);
  };

  return (
    <div style={{ padding: "20px", color:"white" }}>
      <h2>City Information</h2>

      <input
        type="text"
        placeholder="Enter City Name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {city && (
        <div style={{ marginTop: "20px" }}>
          <h3>City Details</h3>
          <p><b>Name:</b> {city.Name}</p>
          <p><b>Country Code:</b> {city.CountryCode}</p>
          <p><b>District:</b> {city.District}</p>
          <p><b>Population:</b> {city.Population}</p>
        </div>
      )}
    </div>
  );
}

export default CityDetails;