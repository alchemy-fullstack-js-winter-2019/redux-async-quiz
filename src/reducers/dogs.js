import { FETCH_DOG, FETCH_DOG_LOADING } from '../actions/dogs';
const initialState = {
  dogImage: ''
};


export default function reducer(state = initialState, {
  type, payload }) {
  switch(type) {
    case FETCH_DOG:
      return {
        ...state,
        dogImage: payload.image,
        loading: false
      };
    case FETCH_DOG_LOADING:
      return { ...state, loading: true };
    default:  
      return state;
  }
}
