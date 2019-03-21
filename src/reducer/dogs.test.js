import reducer from './dogs';
import { FETCH_DOGS } from '../actions/dogs';

describe('dogs reducer', () => {
  it('handles a fetch dog img url action', () => {
    const state = {
      status:'',
      message:''
    };
    const fetchDogsWithAPromise = reducer(state, {
      type: FETCH_DOGS,
      payload: {
        status: '',
        message:''
      }
    });
    expect(fetchDogsWithAPromise).toEqual({
      status:'',
      message:''
    });
  });
});
