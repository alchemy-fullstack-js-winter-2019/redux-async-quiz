import { fetchDogs, FETCH_DOGS } from './dogs';
import { getDogs } from '../services/dogs';

jest.mock('../services/dogs');

describe('actions test', () => {
  it('fetches dogs', () => {
    const action = fetchDogs();

    expect(action).toEqual({ 
      type: FETCH_DOGS,
      payload:  getDogs()
    });
  });
});
