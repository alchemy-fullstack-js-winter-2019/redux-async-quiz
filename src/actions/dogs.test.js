import { FETCH_DOG_IMAGE, fetchDogImage } from './dogs';
import { getImage } from '../services/dogs';

jest.mock('../services/dogs');

describe('actions test', () => {
  it('fetches a quote', () => {
    const action = fetchDogImage();

    expect(action).toEqual({ 
      type: FETCH_DOG_IMAGE,
      payload:  getImage()
    });
  });
});
