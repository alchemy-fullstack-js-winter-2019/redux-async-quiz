import { FETCH_MESSAGE } from '../actions/dogActions';

const initalState = {
  message: '',
};

export default function reducer(state = initalState, { type, payload }) {
  switch(type) {
    case FETCH_MESSAGE:
      return { ...state, message: payload.message };
    default:
      return state;
  }
}

