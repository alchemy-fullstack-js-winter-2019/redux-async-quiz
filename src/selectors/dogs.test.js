import { getUrl } from './dogs';

describe('dogs selectors', () => {
  it('selects only the top text', () => {
    const state = {
      dogs: {
        url: 'https://images.dog.ceo/breeds/beagle/n02088364_17935.jpg'
      }
    };
    const selectedUrl = getUrl(state);

    expect(selectedUrl).toEqual('https://images.dog.ceo/breeds/beagle/n02088364_17935.jpg');
  });
});
