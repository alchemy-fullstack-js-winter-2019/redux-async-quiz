import { FETCH_DOG } from '../actions/dogs';

const initialState = {
  url: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_DOG:
      return {
        ...state,
        url: action.payload.message
      };
    default:
      return state;
  }
}
