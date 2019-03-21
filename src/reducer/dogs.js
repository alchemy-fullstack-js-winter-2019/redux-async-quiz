import { FETCH_DOGS } from '../actions/dogs';

const initialState = {
  status: '',
  message:''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_DOGS:
      return { ...state, status: payload.status, message: payload.message
      };
    default:
      return state;
  }
}
