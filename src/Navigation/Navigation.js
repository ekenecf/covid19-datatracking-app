import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import image1 from '../images/image1.webp';
import image2 from '../images/settings.webp';
import image3 from '../images/microphone.webp';
import './Navigation.css';
import '../reset.css';

export default function Nav() {
  const { goBack } = useSelector((state) => state.DataReducer);
  return (
    <header>
      <nav className="headingDetails">
        {goBack ? <NavLink to="/"> Previous page</NavLink> : ''}
        <div className="statistics">
          <p>Covid19 data statistics</p>
          <img className="image3" src={image3} alt={image3} />
          <img className="image2" src={image2} alt={image2} />
        </div>
        <img className="image1" src={image1} alt={image1} />
      </nav>
    </header>
  );
}
