import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getCountryData } from '../Redux/DataReducer/api';
import ListDetail from './ListDetails';

const Details = () => {
  const [countryFlag, setCountryFlag] = useState();
  const { viewDetails, countryDetailsLoading, error } = useSelector((state) => state.DataReducer);
  const dispatch = useDispatch();
  const location = useLocation();

  const { country } = location.state || {};

  useEffect(() => {
    if (country === 'spain') {
      dispatch(getCountryData('spain'));
    }
    dispatch(getCountryData(country));
  }, []);

  if (countryDetailsLoading) {
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
  fetch(`https://restcountries.com/v3.1/name/${country}`).then((response) => response.json())
    .then((data) => {
      setCountryFlag(data[0].flags.png);
    });

  // const data = [];
  const datum = Object.values(viewDetails);
  // console.log( 'datum',  datum)
  const array = Object.assign([], datum);
  // console.log('array', array);

  return (

    <div>
      <img src={countryFlag} alt="countryFlag" />
      <div>
        {
          array.map((countryDetail) => (
            <div key={countryDetail.id}>
              <ListDetail
                country={countryDetail.name}
                confirmedToday={countryDetail.today_confirmed}
                deathToday={countryDetail.today_deaths}
                newdayConfirmed={countryDetail.today_new_confirmed}
                newDeaths={countryDetail.today_new_deaths}
                newRecovered={countryDetail.today_new_recovered}
                yesterdayconfirmed={countryDetail.yesterday_confirmed}
                source={countryDetail.source}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
};
export default Details;
