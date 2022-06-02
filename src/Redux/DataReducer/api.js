import {
  setLoadingData, setData, setError, countryDetails, countryDetailsLoading,
} from './Actions';

const URL = 'https://api.covid19api.com/summary';

const getData = () => (dispatch) => {
  dispatch(setLoadingData());
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      dispatch(setData(data.Countries));
    })
    .catch((error) => {
      dispatch(setError(error.message));
    });
};
export default getData;

export const getCountryData = (countryName) => (dispatch) => {
  dispatch(countryDetailsLoading());
  const now = new Date();
  const date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
  fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/${countryName}`)
    .then((response) => response.json())
    .then((data) => {
      const objectData = data.dates;
      const incomingData = Object.values(objectData)[0].countries;
      dispatch(countryDetails(incomingData));
    })
    .catch((error) => {
      dispatch(setError(error.message));
    });
};
