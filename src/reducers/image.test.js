import reducer from './image';
import { FETCH_IMAGE } from '../action/image';

describe('reducer test', () => {
  it('can fetch image', () => {
    const state =  {
      image: '',
      loading: true
    };
    const reducerState = reducer(state, {
      type: FETCH_IMAGE,
      payload: {
        image: 'image',
        loading: false
      }
    });
    expect(reducerState).toEqual({ image: 'image', loading: false });
  });
});

