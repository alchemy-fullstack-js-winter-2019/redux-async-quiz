import {
  FETCH_DOG,
  fetchDog
} from './dogs';
  
describe.skip('dogs action creators', () => {
  it('can create an fetchDog action', () => {
    const action = fetchDog();
  
    expect(action).toEqual({
      type: FETCH_DOG,
      payload: expect.any(String)
    });
  });
});
