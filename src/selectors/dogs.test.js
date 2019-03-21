import { getImageUrl } from './dogs';

describe('selectors test', () => {
  it('can get get the dog image url', () => {
    const state = {
      imageUrl: {
        message: 'https://images.dog.ceo/breeds/sheepdog-english/n02105641_2052.jpg',
        status: 'success'
      }
    };

    const fetchedUrl = getImageUrl(state);
      
    expect(fetchedUrl).toEqual({
      message: 'https://images.dog.ceo/breeds/sheepdog-english/n02105641_2052.jpg',
      status: 'success'
    });
  });
});
