import { FETCH_DOG } from '../actions/dog';

const initialState = {
  dog:''

};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_DOG:
      return { ...state,
        dog: payload.message
      };
    default: return state; 
  }
}

