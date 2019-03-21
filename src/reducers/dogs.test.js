import reducer from './dogs';
import { FETCH_IMAGE } from '../actions/dogs';

describe('dogs reducer', () => {
  it('fetches an image from state', () => {
    const state = {
      dogs: ''
    };

    const updatedState = reducer(state, {
      type: FETCH_IMAGE,
      payload: 'http://dogimage.jpg'
    });

    expect(updatedState).toEqual({
      dogs:{ dogImage: 'http://dogimage.jpg' }
    });
  });
});
