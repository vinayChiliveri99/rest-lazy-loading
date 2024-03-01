/* eslint-disable react/prop-types */
// CountryCard.js
import LazyLoad from 'react-lazyload';
import dummy from '../src/assets/gray-image-placeholder.png';

function CountryCard({ props }) {
  return (
    <div className="country-card">
      <LazyLoad
        once={true}
        placeholder={
          <div>
            <img
              src={dummy}
              alt="placeholder"
              style={{ height: '340px', width: '270px' }}
            />
          </div>
        }
      >
        <img src={props.flags.png} alt={`${props.name.common}`} />
        <div className="country-description">
          <p className="country-name">{props.name.common}</p>
          <p>
            <span>Population: </span>
            {props.population}
          </p>
          <p>
            <span>Region: </span>
            {props.region}
          </p>
          <p>
            <span>Capital: </span>
            {props.capital}
          </p>
        </div>
      </LazyLoad>
    </div>
  );
}

export default CountryCard;
