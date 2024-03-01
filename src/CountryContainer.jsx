/* eslint-disable react/prop-types */

import CountryCard from './CountryCard';
import { Circles } from 'react-loader-spinner';

function CountryContainer({ filteredData, loading }) {
  // checking the state, if the page is currently loading or not.!

  if (loading) {
    return (
      <div className="loader">
        <Circles
          height="180"
          width="180"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  } else {
    return (
      <div className="countries-container">
        {filteredData.map((country) => (
          <CountryCard key={country.name.common} props={country} />
        ))}
      </div>
    );
  }
}

export default CountryContainer;
