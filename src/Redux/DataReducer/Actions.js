import ActionTypes from './ActionTypes';

export const setLoadingData = () => ({
  type: ActionTypes.FETCH_DATA_LOADING,
});

export const setData = (data) => ({
  type: ActionTypes.FETCH_DATA,
  payload: data,
});

export const setError = (error) => ({
  type: ActionTypes.FETCH_DATA_ERROR,
  payload: error,
});

export const sortData = (data) => ({
  type: ActionTypes.SORT_DATA,
  payload: data,
});

export const countryDetails = (data) => ({
  type: ActionTypes.VIEW_COUNTRY_DETAILS,
  payload: data,
});

export const countryDetailsLoading = () => ({
  type: ActionTypes.VIEW_COUNTRY_DETAILS_LOADIND,
});
