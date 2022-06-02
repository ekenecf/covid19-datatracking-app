import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortData } from '../Redux/DataReducer/Actions';
import getData from '../Redux/DataReducer/api';
import Listitem from './Listitem';

const Home = () => {
  const { countries, loading, error } = useSelector((state) => state.DataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (loading === true) {
    return (
      <div>
        {' '}
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
      sortCountries = countries.sort((a, b) => a.Country - b.Country);
    } else if (e.target.value === 'z-a') {
      sortCountries = countries.sort((a, b) => b.Country - a.Country);
    } else if (e.target.value === 'ascending') {
      sortCountries = countries.sort((a, b) => a.TotalConfirmed - b.TotalConfirmed);
    } else if (e.target.value === 'descending') {
      sortCountries = countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
    } else {
      dispatch(getData());
    }
    dispatch(sortData(sortCountries));
  };

  let totalcases = 0;
  countries.map((country) => totalcases += country.TotalConfirmed);

  return (

    <div>
      <div>
        <h2>
          World total cases
          {totalcases.toLocaleString('en-US')}
        </h2>
      </div>
      <div>
        <select onChange={handleSearch}>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
          <option value="ascending">Ascending TotalConfirmed</option>
          <option value="descending">Descending TotalConfirmed</option>
        </select>
      </div>
      <>
        {
        countries.map((country) => (
          <Listitem
            key={country.ID}
            countries={country.Country}
            totalconfirmed={country.TotalConfirmed}
          />
        ))
      }
      </>
    </div>

  );
};

export default Home;
