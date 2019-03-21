import { fetchDogImg } from './dogs';

jest.mock('../services/dogApi');

describe('actions', () => {
  it('fetches dog image action', () => {
    expect(fetchDogImg()).toEqual({
      type: 'FETCH_DOG_IMG',
      payload: expect.any(Promise)
    });
  });
});
