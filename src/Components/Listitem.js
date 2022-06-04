import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Listitem.css';

const Listitem = (props) => {
  const { countries, totalconfirmed } = props;
  return (
    <>
      <div className="listItem">
        <NavLink id={countries} to="/Details" state={{ country: countries }}>
          <li className="countries">{countries}</li>
          <li className="confirmed">{totalconfirmed}</li>
        </NavLink>
      </div>
    </>
  );
};

Listitem.propTypes = {
  countries: PropTypes.string.isRequired,
  totalconfirmed: PropTypes.string.isRequired,
};

export default Listitem;
