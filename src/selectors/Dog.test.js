
import { getDog } from './Dog';

describe('selector test', () => {
  it('return the the image url which is really just one image', () => {
    const state = {
      dog: {
        image: {
          message: ''
        }
      }
    };
    const result = getDog(state);

    expect(result).toEqual('');
  });
});
