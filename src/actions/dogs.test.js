import { 
  FETCH_DOG, 
  FETCH_DOG_FULFILLED, 
  FETCH_DOG_PENDING, 
  FETCH_DOG_REJECTED, 
  fetchDog 
} from './dogs';

jest.mock('../services/dogs.js');

describe('dog action', () => {
  it('can handle the fetch dog action', () => {
    const action = fetchDog();
    expect(action).toEqual({
      type: FETCH_DOG,
      fulfilledType: FETCH_DOG_FULFILLED,
      pendingType: FETCH_DOG_PENDING,
      rejectedType: FETCH_DOG_REJECTED,
      payload: Promise.resolve([
        {
          'status': 'success',
          'message': 'doggo!'
        }
      ])
    });
  });
});
