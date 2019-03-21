import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware/';
import { fetchDogsWithPromise, FETCH_DOGS } from './dogs';

jest.mock('../services/dogsApi');

describe('dogs action test', () => {
  it('can fetch a dog', done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer, 
      applyMiddleware(...middleware)
    );

    store.dispatch(fetchDogsWithPromise());

    setTimeout(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: 'LOAD_START'
      });
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: FETCH_DOGS,
        payload: 'a random dog image url'
      });
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: 'LOAD_END'
      });
      done();
    }, 100);
  });
});
