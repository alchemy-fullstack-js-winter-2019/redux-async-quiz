import { FETCH_MESSAGE, fetchMessage } from './dogActions';

jest.mock('../services/dogApi.js');

describe('dog image action', () => {
  it('can fetch an image', () => {
    const messageAction = fetchMessage();
    expect(messageAction).toEqual({
      type: FETCH_MESSAGE,
      payload: Promise.resolve({
        'message': 'https://dog.ceo/api/breeds/image/random',
      })
    });
  });
});
