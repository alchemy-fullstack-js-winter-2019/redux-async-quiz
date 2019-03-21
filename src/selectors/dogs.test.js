import { getDogSelect, isLoading, getError } from  './dogs';

describe('dogs selector', () => {
  let state;
  beforeEach(() => {
    state = {
      dog: { message: 'rolo' },
      loading: false,
      error: 'error message'
    };
  });

  it('can get a dog from state', () => {
    const selectedDog = getDogSelect(state);
    expect(selectedDog).toEqual({ message: 'rolo' });
  });

  it('can get loading from state', () => {
    const loadingStatus = isLoading(state);
    expect(loadingStatus).toBeFalsy();
  });

  it('can get error from state', () => {
    const errorMessage = getError(state);
    expect(errorMessage).toEqual('error message');
  });
});
