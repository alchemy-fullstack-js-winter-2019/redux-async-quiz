import {
  getDogImage
} from './dogs';

describe('dogImage selector', () => {
  let state = {
    image: 'hello'
  };

  it('get a dogImage from state', () => {
    expect(getDogImage(state)).toEqual(undefined);
  });

});
