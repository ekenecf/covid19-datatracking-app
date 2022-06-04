import Listitem from '../Components/Listitem';

describe('Tests: Listitem', () => {
  it('should return an action with type SORT_DATA', () => {
    const data = [
      {
        Country: 'Afghanistan',
        TotalConfirmed: 180520,
      },
    ];
    expect(Listitem(data)).toMatchSnapshot();
  });
});
