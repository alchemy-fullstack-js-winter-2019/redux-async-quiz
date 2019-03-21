import { getDogImage } from './dogs';

describe('dogs selectors', () => {
  let state = {
    dogs: {
      image:'https://images.dog.ceo//breeds//husky//n02110185_13704.jpg'
    }
  };

  it('gets a dog image from state', () => {
    expect(getDogImage(state)).toEqual('https://images.dog.ceo//breeds//husky//n02110185_13704.jpg');
  });
});
