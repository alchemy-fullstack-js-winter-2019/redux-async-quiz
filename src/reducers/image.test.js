import reducer from '../reducers/image';
import { FETCH_DOG } from '../actions/image';

jest.mock('../services/dogApi.js');

describe('reducer', () => {
  it('can handle updating state', () => {
    const state = {
      url: '',
      loading: false
    };
    const updatedState = reducer(state, {
      type: FETCH_DOG,
      payload: 'dogurl'
    });
    expect(updatedState).toEqual({
      ...state,
      url: 'dogurl',
      loading: false
    });
  });
});
