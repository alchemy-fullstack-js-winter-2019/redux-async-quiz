import { getImg } from './dogs';

describe('selectors', () => {
  it('returns img url', () => {
    const state = {
      dogs: {
        img: 'dog.com'
      }
    };
    expect(getImg(state)).toEqual('dog.com');
  });
});
