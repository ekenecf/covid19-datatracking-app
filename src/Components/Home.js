import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortData } from '../Redux/DataReducer/Actions';
import getData from '../Redux/DataReducer/api';
import Listitem from './Listitem';
import image1 from '../images/image1.png';
import image2 from '../images/settings.webp';
import image3 from '../images/microphone.webp';
import './Home.css';

const Home = () => {
  const { countries, loading, error } = useSelector((state) => state.DataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (loading) {
    return (
      <div className="loadingImage">
        <img
          src="https://c.tenor.com/FBeNVFjn-EkAAAAC/ben-redblock-loading.gif"
          alt="imageloading..."
        />
      </div>
    );
  }
  if (error) {
    return <p>Please refresh the page</p>;
  }
  const handleSearch = (e) => {
    let sortCountries;
    if (e.target.value === 'a-z') {
      sortCountries = countries.sort((a, b) => a.Country.localeCompare(b.Country));
    } else if (e.target.value === 'z-a') {
      sortCountries = countries.reverse((a, b) => a.Country.localeCompare(b.Country));
    } else if (e.target.value === 'ascending') {
      sortCountries = countries.sort((a, b) => a.TotalConfirmed - b.TotalConfirmed);
    } else if (e.target.value === 'descending') {
      sortCountries = countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
    } else {
      dispatch(getData());
    }
    dispatch(sortData(sortCountries));
  };

  const totalCases = countries.reduce((total, country) => total + country.TotalConfirmed, 0);

  return (
    <div>
      <div className="introduction">
        <p>Covid19 data statistics</p>
        <img className="image3" src={image3} alt={image3} />
        <img className="image2" src={image2} alt={image2} />
      </div>
      <div className="imageCases">
        <img className="image1" src={image1} alt={image1} />
        <h2 className="totalCases">
          World total confirmed cases:
          {totalCases.toLocaleString('en-US')}
        </h2>
      </div>
      <div className="sortOptions">
        <p>Sort Items: </p>
        <select className="handleSearch" onChange={handleSearch}>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
          <option value="ascending">Ascending TotalConfirmed</option>
          <option value="descending">Descending TotalConfirmed</option>
        </select>
      </div>

      <div className="countryList">
        {
        countries.map((country) => (
          <Listitem
            key={country.ID}
            countries={country.Country}
            totalconfirmed={country.TotalConfirmed.toLocaleString('en-US')}
          />
        ))
      }
      </div>
    </div>

  );
};
export default Home;
