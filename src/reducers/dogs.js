import { 
  FETCH_IMAGE
} from '../actions/dogs.js';

const initialState = {
  image: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_IMAGE: {
      return {
        ...initialState,
        image: payload.image
      };
    }
    default: 
      return state;
  }
}
