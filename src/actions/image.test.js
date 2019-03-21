
import { getImage, FETCH_IMAGE, FETCH_IMAGE_LOADING } from './image';

jest.mock('../services/dogImageApi.js');

describe('action test', () => {
  it('fetches an image', () => {
    const action = getImage();
    expect(action).toEqual({
      type: FETCH_IMAGE,
      loadStart: FETCH_IMAGE_LOADING,
      payload: Promise.resolve({
        image: 'image'
      })
    });
  });
});
