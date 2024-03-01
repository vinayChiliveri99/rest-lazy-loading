/* eslint-disable react/prop-types */

function SearchFilter({
  searchCountry,
  selectedRegion,
  onFilterChange,
  data,
  sortByPopulation,
}) {
  // Extract unique regions from the initial data
  const uniqueRegions = [
    ...new Set(data.map((country) => country.region)),
  ];

  return (
    <div className="searchFilter">
      <div className="search-container">
        <img
          id="search-img"
          src="src/assets/search-outline.svg"
          alt="search-icon"
        />
        <input
          type="search"
          autoComplete="off"
          id="search-bar"
          value={searchCountry}
          onChange={(e) =>
            onFilterChange(e.target.value, selectedRegion)
          }
          placeholder="Search for a country..."
        />
      </div>
      {/* Dynamically generate the region options */}
      <div className="dropdown" id="regionDropdown">
        <select
          value={selectedRegion}
          onChange={(e) =>
            onFilterChange(searchCountry, e.target.value)
          }
        >
          <option value="">Filter by Region</option>
          {uniqueRegions.map((region, index) => (
            <option key={index} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      <div className="dropdown">Subregions</div>

      <div className="dropdown" id="populationDropdown">
        <select onChange={(e) => sortByPopulation(e.target.value)}>
          <option value="">Population</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <div className="dropdown" id="areaDropdown">
        area
      </div>
    </div>
  );
}

export default SearchFilter;
