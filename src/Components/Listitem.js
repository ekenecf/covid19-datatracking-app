import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Listitem = (props) => {
  const { countries, totalconfirmed } = props;
  return (
    <div>
      <NavLink id={countries} to="/Details" state={{ country: countries }}>
        <p>{countries}</p>
        <p>{totalconfirmed}</p>
      </NavLink>
    </div>
  );
};

Listitem.propTypes = {
  countries: PropTypes.string.isRequired,
  totalconfirmed: PropTypes.number.isRequired,
};

export default Listitem;
