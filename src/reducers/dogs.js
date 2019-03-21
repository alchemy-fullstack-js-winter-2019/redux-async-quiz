const initialState = {
  imageUrl: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_DOG_IMAGE':
      return {
        ...state,
        imageUrl: action.payload.message
      };
    default: 
      return state;
  }
}
