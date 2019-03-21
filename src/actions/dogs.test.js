import { FETCH_DOG, fetchDog } from './dogs';
import { getDog } from '../services/dogApi';

jest.mock('../services/dogApi');

describe('Action test', () => {
  it('handled fetchDog action', () => {
    const fetchedAction = fetchDog();
    expect(fetchedAction).toEqual({
      type: FETCH_DOG,
      payload: getDog()
    });
  });
});
