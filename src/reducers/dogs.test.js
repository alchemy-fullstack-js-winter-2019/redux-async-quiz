import reducer from './dogs';
import {
  FETCH_IMAGE
} from '../actions/dogs';


jest.mock('../services/dogApi.js');

describe('dogs reducer', () => {
  let state;
  
  beforeEach(() => {
    state = {
      image: 'hello'
    };
  });
  it('handles the CREATE_POLL action', () => {
    const updatedState = reducer(state, {
      type: FETCH_IMAGE,
      payload: { image: '' }
    });
    expect(updatedState).toEqual({
      image: ''
    });
  });
});

