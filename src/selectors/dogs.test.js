import { getDogImage } from './dogs';

describe('dog selectors', () => {
  it('gets a dog image from state', () => {
    const state = {
      dogs: { dogImage: 'http://dogimage.png' }
    };

    const newImage = getDogImage(state);
    expect(newImage).toEqual('http://dogimage.png');

  });
});
