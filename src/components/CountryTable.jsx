function CountryTable({ countries }) {
  return (
    <table className="table table-bordered table-hover">
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Country</th>
          <th>Capital</th>
          <th>Population</th>
          <th>Region</th>
        </tr>
      </thead>

      {/* <tbody>
        {countries.map((country) => (
          <tr key={country.id}>
            <td>{country.id}</td>
            <td>{country.country_name}</td>
            <td>{country.capital}</td>
            <td>{country.population}</td>
            <td>{country.region}</td>
          </tr>
        ))}
      </tbody> */}
    </table>
  );
}

export default CountryTable;