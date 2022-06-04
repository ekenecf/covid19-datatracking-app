import DataReducer from '../Redux/DataReducer/Reducer';
import ActionTypes from '../Redux/DataReducer/ActionTypes';

describe('Tests: Details', () => {
  it('should return an action with payload of data object with Country test data', () => {
    const data = {
      countryName: {
        today_confirmed: 178901,
        today_deaths: 7683,
        today_new_confirmed: 0,
        today_new_deaths: 0,
      },
    };

    const action = {
      type: ActionTypes.VIEW_COUNTRY_DETAILS,
      payload: data,
    };

    expect(DataReducer(data, action)).toEqual(expect.objectContaining({
      countryName:
        {
          today_confirmed: 178901, today_deaths: 7683, today_new_confirmed: 0, today_new_deaths: 0,
        },
    }));
  });
});
