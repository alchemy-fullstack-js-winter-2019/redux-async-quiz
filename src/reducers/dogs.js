import {
  FETCH_DOG_IMG
} from '../actions/dogs';

const initialState = {
  img: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_DOG_IMG:
      return {
        ...state,
        img: payload
      };
    default:
      return state;
  }
}
