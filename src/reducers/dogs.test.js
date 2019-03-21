import reducer from './dogs';

describe('reducer', () => {
  it('fetches dog image', () => {
    const state = {
      img: 'dog.com'
    };
    const action = {
      type: 'FETCH_DOG_IMG',
      payload: 'dog2.com'
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      img: 'dog2.com'
    });
  });
});
