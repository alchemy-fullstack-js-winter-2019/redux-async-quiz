import { getDog } from './dogs';

describe('Selectors test', () => {
  it('can get a dog', () => {
    const state = {
      dogs:
      { dogImage: 'https://images.dog.ceo/breeds/chihuahua/n02085620_3485.jpg'
      }
    };
    const fetchedDogImage = getDog(state);
    expect(fetchedDogImage).toEqual('https://images.dog.ceo/breeds/chihuahua/n02085620_3485.jpg');
  });
});
