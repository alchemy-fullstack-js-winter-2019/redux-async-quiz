import reducer from './dogs';
import { FETCH_DOG, FETCH_DOG_LOADING } from '../actions/dogs';

describe('Dogs reducers test', () => {
  it('can fetch dog from state', () => {
    const state = {
      dogImage: '', 
      loading: false
    };

    const fetchedState = reducer(state, {
      type: FETCH_DOG,
      payload: {
        image: 'https://images.dog.ceo/breeds/chihuahua/n02085620_3485.jpg'
      }
    });
    expect(fetchedState).toEqual({
      dogImage: 'https://images.dog.ceo/breeds/chihuahua/n02085620_3485.jpg',
      loading: false
    });
  });

  it('can fetch loading from state', () => {
    const state = {
      image: 'https://images.dog.ceo/breeds/chihuahua/n02085620_3485.jpg',
      loading: false
    };
    const fetchedLoading = reducer(state, {
      type: FETCH_DOG_LOADING,
      payload: {
        image: 'https://images.dog.ceo/breeds/chihuahua/n02085620_3485.jpg',
        loading: true
      }
    });
    expect(fetchedLoading).toEqual({ 
      image: 'https://images.dog.ceo/breeds/chihuahua/n02085620_3485.jpg',
      loading: true
    });
  });
});
