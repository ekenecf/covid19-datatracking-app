import React from 'react';
import PropTypes from 'prop-types';
import './Details.css';

const ListDetail = (props) => {
  const {
    country, confirmedToday, deathToday, newdayConfirmed,
    newDeaths, newRecovered, yesterdayconfirmed, source,
  } = props;
  return (
    <div className="mapCountry">
      <p>
        Country:
        {country}
      </p>
      <p>
        Confirmed cases Today:
        {confirmedToday}
      </p>
      <p>
        Death today:
        {deathToday}
      </p>
      <p>
        New cases:
        {newdayConfirmed}
      </p>
      <p>
        Todays new death:
        {newDeaths}
      </p>
      <p>
        New Recovered person&apos;s:
        {newRecovered}
      </p>
      <p>
        Confirmed cases yesterday:
        {yesterdayconfirmed}
      </p>
      <p>
        Source:
        {source}
      </p>
    </div>
  );
};

ListDetail.propTypes = {
  country: PropTypes.string.isRequired,
  confirmedToday: PropTypes.number.isRequired,
  deathToday: PropTypes.number.isRequired,
  newdayConfirmed: PropTypes.number.isRequired,
  newDeaths: PropTypes.number.isRequired,
  newRecovered: PropTypes.number.isRequired,
  yesterdayconfirmed: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired,
};

export default ListDetail;
