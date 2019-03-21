import { FETCH_IMAGE } from '../actions/dogs';

const initialState = {
  dogImage: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_IMAGE:
      return { ...state, dogImage: payload.message };
    default:
      return state;
  }
}
