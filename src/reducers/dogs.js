import { FETCH_DOG } from '../actions/dogs';

const initialState = {
  image: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_DOG:
      return {
        ...state,
        image: action.payload.message
      };
    default:
      return state;
  }
}
