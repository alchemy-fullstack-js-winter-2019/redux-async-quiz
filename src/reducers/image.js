import { FETCH_IMAGE, FETCH_IMAGE_LOADING } from '../actions/image';

const initialState = {
  image: '',
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_IMAGE: {
      return { ...state, image: payload.image };
    }
    case FETCH_IMAGE_LOADING: {
      return { ...state, loading: true
      };
    }
    default:
      return state;
  }
}
