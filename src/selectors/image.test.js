import { getDogImage } from '../selectors/image';

describe('image selector', () => {
  it('gets a url from state', () => {
    const state = {
      url: 'n02102973_3461.jpg'
    };

    expect(getDogImage(state)).toEqual('n02102973_3461.jpg');
  });
});
