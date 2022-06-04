import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navigation.css';
import '../reset.css';

export default function Nav() {
  const { goBack } = useSelector((state) => state.DataReducer);
  return (
    <header>
      <nav className="headingDetails">
        {goBack ? <NavLink to="/"> Back</NavLink> : ''}
      </nav>
    </header>
  );
}
