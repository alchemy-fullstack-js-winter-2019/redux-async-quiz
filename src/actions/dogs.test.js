import { FETCH_IMAGE, fetchImage } from './dogs';

jest.mock('../services/dogsApi');

describe('dogs actions', () => {
  it('creates an action that fetches an image', () => {
    const action = fetchImage();

    expect(action).toEqual({
      type: FETCH_IMAGE,
      payload: Promise.resolve(
        {
          'message': 'dogimage.png',
        }),
    });
  });
});
