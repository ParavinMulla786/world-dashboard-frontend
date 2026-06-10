function SearchBar({ search, setSearch }) {
  return (
    <div className="my-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search Country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;










