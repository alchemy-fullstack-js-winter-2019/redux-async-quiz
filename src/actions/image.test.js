import {
  fetchDog,
  FETCH_DOG,
  FETCH_DOG_PENDING,
  FETCH_DOG_FULFILLED,
  FETCH_DOG_REJECTED
} from './image';

jest.mock('../services/dogApi.js', () => ({
  getDog: () => Promise.resolve()
}));


describe('dog action creators', () => {
  it('creates a FETCH_DOG action', () => {
    const action = fetchDog();

    expect(action).toEqual({
      type: FETCH_DOG,
      pendingType: FETCH_DOG_PENDING,
      fulfilledType: FETCH_DOG_FULFILLED,
      rejectedType: FETCH_DOG_REJECTED,
      payload: expect.any(Promise)
    });
  });
});
