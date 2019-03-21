import reducer from './dog';
import { FETCH_MESSAGE } from '../actions/dogActions';

describe('simpsons reducer', () => {
  it('can fetch a image', () => {
    const state = {
      message: 'img',
    };

    const reducerImage = reducer(state, {
      type: FETCH_MESSAGE,
      payload: [{
        message: 'img'
      }]
    });
    expect(reducerImage).toEqual({ message: 'img' });
  });


});
