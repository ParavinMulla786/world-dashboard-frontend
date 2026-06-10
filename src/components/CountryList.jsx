import CountryCard from "./CountryCard";

function CountryList({ countries }) {
  return (
    <div className="row mt-4">
      {countries.map((country) => (
        <CountryCard
          key={country.id}
          country={country}
        />
      ))}
    </div>
  );
}

export default CountryList;