import { setData, sortData } from '../Redux/DataReducer/Actions';

describe('Tests: Home', () => {
  it('should return an action with type SORT_DATA', () => {
    const data = [
      {
        Country: 'Afghanistan',
        TotalConfirmed: 180520,
      },
    ];
    const action = sortData(data);
    expect(action.type).toBe('SORT_DATA');
  });
  it('should return an action with payload of data object array with Country test data', () => {
    const data = [
      {
        Country: 'Afghanistan',
        TotalConfirmed: 180520,
      },
    ];
    const action = setData(data);
    expect(action.payload).toEqual(expect.arrayContaining([data[0]]));
    expect(action.payload[0].Country).toBe('Afghanistan');
  });
});
