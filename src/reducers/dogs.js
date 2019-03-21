const initialState = {
  imageUrl: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case 'FETCH_DOG_IMAGE':
      return {
        ...state,
        imageUrl: payload.message
      };
    default: 
      return state;
  }
}
