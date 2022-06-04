import ActionTypes from './ActionTypes';

const initialState = {
  countries: [],
  loading: true,
  error: false,
  viewDetails: [],
  goBack: false,
};

const DataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_DATA_LOADING:
      return {
        ...state, loading: true,
      };
    case ActionTypes.FETCH_DATA:
      return {
        ...state, countries: payload, loading: false, goBack: false,
      };
    case ActionTypes.SORT_DATA:
      return {
        ...state, countries: payload,
      };
    case ActionTypes.FETCH_DATA_ERROR:
      return {
        ...state, error: true,
      };
    case ActionTypes.VIEW_COUNTRY_DETAILS:
      return {
        ...state, viewDetails: payload, loading: false, goBack: true,
      };
    case ActionTypes.VIEW_COUNTRY_DETAILS_LOADIND:
      return {
        ...state, loading: true, goBack: true,
      };
    default:
      return state;
  }
};

export default DataReducer;
