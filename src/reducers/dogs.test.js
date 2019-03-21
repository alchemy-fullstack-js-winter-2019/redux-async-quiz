import reducer from './dogs';
import { FETCH_DOG } from '../actions/dogs';

describe('Dogs reducers test', () => {
  it('can fetch dog form state', () => {
    const state = {
      dogImage: ''
    };

    const fetchedState = reducer(state, {
      type: FETCH_DOG,
      payload: {
        image: 'https://images.dog.ceo/breeds/chihuahua/n02085620_3485.jpg'
      }
    });
    expect(fetchedState).toEqual({
      dogImage: 'https://images.dog.ceo/breeds/chihuahua/n02085620_3485.jpg'
    });
  });
});
