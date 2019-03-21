import { getImageUrl } from './dogs';

describe('selectors test', () => {
  it('can get get the dog image url', () => {
    const state = {
      imageUrl: 'https://images.dog.ceo/breeds/sheepdog-english/n02105641_2052.jpg',
    };

    const fetchedUrl = getImageUrl(state);
      
    expect(fetchedUrl).toEqual('https://images.dog.ceo/breeds/sheepdog-english/n02105641_2052.jpg');
  });
});
