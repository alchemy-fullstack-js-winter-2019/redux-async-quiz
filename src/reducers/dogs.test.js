import reducer from './dogs';
import { 
  FETCH_DOG, 
  FETCH_DOG_PENDING, 
  FETCH_DOG_REJECTED,
} from '../actions/dogs';

describe('dogs reducer', () => {
  let state;
  beforeEach(() => {
    state = {
      dog: {},
      loading: false,
      error: null
    };
  });

  it('can handle the fetch dog action', () => {
    const updatedState = reducer(state, {
      type: FETCH_DOG,
      payload: {
        dog: 'dog'
      }
    });

    expect(updatedState).toEqual({
      dog: {
        dog: 'dog'
      },
      loading: false,
      error: null
    });
  });

  it('can handle the fetch dog pending action', () => {
    const updatedState = reducer(state, {
      type: FETCH_DOG_PENDING,
      payload: {
        loading: true
      }
    });
    expect(updatedState).toEqual({
      ...state,
      loading: true
    });
  });

  it('can handle the fetch dog rejected action', () => {
    const updatedState = reducer(state, {
      type: FETCH_DOG_REJECTED,
      payload: 'ERROR'
    });

    expect(updatedState).toEqual({
      ...state,
      error: 'ERROR'
    });
  });
});
