import { getDog } from './dogs';

describe ('dogs selector', () => {
  it('can get a dog image', () => {
    const state = {
      dogs: {
        dogImage: 'https://images.dog.ceo/breeds/weimaraner/n02092339_3354.jpg'
      }
    };
    const retrievedState = getDog(state);
    expect(retrievedState).toEqual('https://images.dog.ceo/breeds/weimaraner/n02092339_3354.jpg');
  });
});
