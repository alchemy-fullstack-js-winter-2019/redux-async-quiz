import reducer from './dogs';
import { fetchDog } from '../actions/dogs';

describe.skip('reducer tests', () => {
  it('can update url', () => {
    const state = {
      dogs: {
        url: 'https://images.dog.ceo/breeds/beagle/n02088364_17935.jpg'
      }
    };
    const updateUrlAction = fetchDog();
    
    const updatedState = reducer(state, updateUrlAction);

    expect(updatedState).toEqual({
      dogs: {
        url: expect.any(String)
      }
    });
  });
});
