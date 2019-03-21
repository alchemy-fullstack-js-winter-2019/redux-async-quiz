
import { FETCH_DOG, fetchDog } from './dogs';
import { getDogImage } from '../services/dogApi';

jest.mock('../services/dogApi.js');

describe('actions test', () => {
  it('fetches dog', () => {
    const action = fetchDog();

    expect(action).toEqual({ 
      type: FETCH_DOG,
      payload:  getDogImage()
    });
  });
});
