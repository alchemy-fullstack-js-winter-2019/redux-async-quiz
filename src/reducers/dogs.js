import { FETCH_DOG } from '../actions/dogs';
const initialState = {
  dogImage: ''
};


export default function reducer(state = initialState, {
  type, payload }) {
  switch(type) {
    case FETCH_DOG:
      return {
        ...state,
        dogImage: payload.image
      };
    default:  
      return state;
  }
}
