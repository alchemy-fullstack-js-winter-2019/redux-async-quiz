import { FETCH_DOG } from '../actions/Dog';


const intitalState = {
  image: ''
};

export default function reducer(state = intitalState, action) {
  switch(action.type) {
    case FETCH_DOG:
      return { ...state, image: action.payload };
    default: 
      return state;
  }
}
