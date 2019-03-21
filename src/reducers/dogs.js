import { FETCH_DOG, FETCH_DOG_FULFILLED, FETCH_DOG_PENDING, FETCH_DOG_REJECTED } from '../actions/dogs';

const initialState = {
  dog: {},
  loading: false,
  error: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_DOG:
      return {
        ...state,
        loading: false,
        dog: payload
      };
    case FETCH_DOG_PENDING:
      return {
        ...state,
        loading: true
      };
    case FETCH_DOG_FULFILLED:
      return { 
        ...state, 
        loading: false 
      };
    case FETCH_DOG_REJECTED: 
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
}
