import reducer from './dogs';
import { FETCH_DOG } from '../actions/dogs';

describe('dogs reducer', () => {
  it('handles the fetch dog action', () => {
    const state = {
      dogImage: ''
    };
    const fetchedState = reducer(state, {
      type: FETCH_DOG,
      payload: {
        message: 'https://images.dog.ceo/breeds/weimaraner/n02092339_3354.jpg'
      }
    });
    expect(fetchedState).toEqual({
      dogImage: 'https://images.dog.ceo/breeds/weimaraner/n02092339_3354.jpg'
    });
  });
});
