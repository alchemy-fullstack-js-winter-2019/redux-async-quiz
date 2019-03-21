import reducer from './dogs';	
import { FETCH_DOG } from '../actions/dogs';
 
describe('dog image reducer', () => {
  let state;
  
  beforeEach(() => {
    state = {
      image: ''
    };
  });

  it('can handle the fetch image action', () => {
    const fetchedImage = reducer(state, {
      type: FETCH_DOG,
      payload: [{
        image:'https://images.dog.ceo//breeds//husky//n02110185_13704.jpg'
      }]
    });
	
    expect(fetchedImage).toEqual({
      ...state,
      image:'https://images.dog.ceo//breeds//husky//n02110185_13704.jpg'
    });
  });
});
