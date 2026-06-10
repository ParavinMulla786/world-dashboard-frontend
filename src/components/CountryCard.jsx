function CountryCard({ country }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100 border-0">

        <img
          src={country.flag}
          alt={country.country_name}
          className="card-img-top"
          style={{ height: "180px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="card-title">
            {country.country_name}
          </h5>

          <p>
            <strong>Capital:</strong> {country.capital}
          </p>

          <p>
            <strong>Population:</strong> {country.population}
          </p>

          <p>
            <strong>Region:</strong> {country.region}
          </p>

          <button className="btn btn-primary w-100">
            View Details
          </button>
        </div>

      </div>
    </div>
  );
}

export default CountryCard;