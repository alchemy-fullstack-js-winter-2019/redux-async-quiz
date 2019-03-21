import {
  getMessage,
} from './dogSelectors';

describe('do selectors test', () => {
  it('can get a dog image from state', () => {
    const state = {
        message: 'img'
      }
    };
    const dogImage = getMessage(state);
    expect(dogImage).toEqual('img');
  });
