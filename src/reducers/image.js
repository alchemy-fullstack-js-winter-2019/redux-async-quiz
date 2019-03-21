import { FETCH_DOG } from '../actions/image';

const initialState = {
  url: '',
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_DOG: 
      return {
        url: payload,
        loading: false
      };
    default:
      return state;
  }
}
