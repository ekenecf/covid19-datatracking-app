import React from 'react';
import PropTypes from 'prop-types';

const ListDetail = (props) => {
  const {
    country, confirmedToday, deathToday, newdayConfirmed,
    newDeaths, newRecovered, yesterdayconfirmed, source,
  } = props;
  return (
    <div>
      <p>{country}</p>
      <p>{confirmedToday}</p>
      <p>{deathToday}</p>
      <p>{newdayConfirmed}</p>
      <p>{newDeaths}</p>
      <p>{newRecovered}</p>
      <p>{yesterdayconfirmed}</p>
      <p>{source}</p>
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
