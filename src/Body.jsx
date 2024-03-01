// parent for both searchFilter and countries container.

import { useState, useEffect } from 'react';
import SearchFilter from './SearchFilter';
import CountryContainer from './CountryContainer';

function Body() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorState, setErrorState] = useState('');

  useEffect(() => {
    // Fetch data from the API

    function fetchData() {
      fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((fetchedData) => {
          setData(fetchedData);
          setFilteredData(fetchedData);
        })
        .catch(
          (error) => setErrorState(error)
          // console.error('Error while fetching data:', error)
        )
        .finally(() => setLoading(false));
    }

    fetchData();
  }, []);

  if (errorState) {
    return (
      <div
        className="error-section"
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src="src/assets/errorImg.png"
          alt=""
          style={{ height: '50vh', width: '35vw', marginTop: '10vh' }}
        />
      </div>
    );
  }

  const handleFilterChange = (searchedCountry, region) => {
    // Handle filtering logic
    setSearchCountry(searchedCountry);
    setSelectedRegion(region);

    // Filter the data based on search and region
    const newData = data.filter((country) => {
      return (
        country.name.common
          .toLowerCase()
          .includes(searchedCountry.toLowerCase()) &&
        (region === '' || country.region.includes(region))
      );
    });

    // Update the filtered data
    setFilteredData(newData);
  };

  // we've full data but filtered data is empty, inorder to avoid over riding

  if (filteredData.length === 0 && data.length !== 0) {
    return (
      <div>
        <SearchFilter
          searchCountry={searchCountry}
          selectedRegion={selectedRegion}
          onFilterChange={handleFilterChange}
          data={data}
        />
        <h1 className="no-countries-found">
          No such countries found!!
        </h1>
      </div>
    );
  } else {
    return (
      <div>
        <SearchFilter
          searchCountry={searchCountry}
          selectedRegion={selectedRegion}
          onFilterChange={handleFilterChange}
          data={data}
        />
        <CountryContainer
          filteredData={filteredData}
          loading={loading}
        />
      </div>
    );
  }
}
export default Body;
