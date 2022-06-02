import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import image1 from '../images/image1.webp';
import './Navigation.css';

export default function Nav() {
  const { goBack } = useSelector((state) => state.DataReducer);
  return (
    <header>
      <nav className="headingDetails">
        {goBack ? <NavLink to="/"> Previous page</NavLink> : ''}
        <div>
          <p>Covid19 Countries data statistics</p>
          <img src={image1} alt={image1} />
        </div>
      </nav>
    </header>
  );
}
