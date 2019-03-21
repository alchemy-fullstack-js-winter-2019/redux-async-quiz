import { FETCH_DOG } from '../actions/dogs';

const initialState = {
  url: 'https://images.dog.ceo/breeds/germanshepherd/n02106662_16129.jpg'
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
