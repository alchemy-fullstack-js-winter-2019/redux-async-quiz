import { FETCH_DOGS } from '../actions/dogs';
const initialState = {
  dog: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_DOGS:
      return {
        ...state,
        dog: action.payload.dog
      };
  }
  return state;
}
