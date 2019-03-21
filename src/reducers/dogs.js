import { FETCH_DOG } from '../actions/dogs';

const initalState = {
  dogImage: ''
};

export default function reducer(state = initalState, { type, payload }) {
  switch(type) {
    case FETCH_DOG:
      return {
        ...state,
        dogImage: payload.message
      };
    default:
      return state;
  }
}
