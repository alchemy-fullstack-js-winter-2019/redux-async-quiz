import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware';
import { fetchImages, FETCH_IMAGE } from './dogs';


jest.mock('../services/dogApi.js');

describe('dog cation', () => {
  it('fetchDogImages creates an action where the payload is images', done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer,
      applyMiddleware(...middleware)
    );

    store.dispatch(fetchImages());

    setTimeout(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: FETCH_IMAGE,
        payload: undefined
      });
      done();
    }, 500);
  });
});
