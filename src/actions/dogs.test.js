import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware';
import { fetchDog, FETCH_DOG } from './dogs';

jest.mock('../services/dogApi.js');

describe('dogs actions', () => {
  it(`fetchDog creates an action where the payload 
      is an image derived from a promise`, done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer,
      applyMiddleware(...middleware)
    );
    store.dispatch(fetchDog());
    setTimeout(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: 'LOAD_START'
      });
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: FETCH_DOG,
        payload: 'https://images.dog.ceo/breeds/dingo/n02115641_4851.jpg'
      });
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: 'LOAD_END'
      });
      done();
    }, 500);
  });
});
