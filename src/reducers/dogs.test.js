import reducer from './dogs';

describe('reducer', () => {
  it('handles the fetch dog image url', () => {
    const state = {
      imageUrl: {
        message: '',
        status: ''
      }
    };
    const fetchedUrl = reducer(state, {
      type: 'FETCH_DOG_IMAGE',
      payload: {
        imageUrl: {
          message: 'https://images.dog.ceo/breeds/sheepdog-english/n02105641_2052.jpg',
          status: 'success'
        }
      }
    });

    expect(fetchedUrl).toEqual({
      imageUrl: {
        message: 'https://images.dog.ceo/breeds/sheepdog-english/n02105641_2052.jpg',
        status: 'success'
      }
    });
  });  
});
