const { getDog } = require('./dogApi');

jest.mock('./dogApi');

describe('Dog Api Service test', () => {
  it('gets a dog from Api', () => {
    return getDog()
      .then(image => {
        expect(image).toEqual([
          {
            'image': 'https://images.dog.ceo/breeds/chihuahua/n02085620_3485.jpg',
          }
        ]);
      });
  });
});
