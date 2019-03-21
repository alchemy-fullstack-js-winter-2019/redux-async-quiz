const { getDog } = require('./dogApi');

jest.mock('./dogApi');

describe('dogApi service', () => {
  it('can get a dog', () => {
    return getDog()
      .then(dog => {
        expect(dog).toEqual('https://images.dog.ceo/breeds/dingo/n02115641_4851.jpg');
      });
  });
});
