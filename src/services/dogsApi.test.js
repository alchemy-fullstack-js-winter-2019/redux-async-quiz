const { getDogs } = require('./dogsApi');

jest.mock('./dogsApi');

describe('dogsApi wireup', () => {
  it('gets a random dog img', () => {
    return getDogs()
      .then(dog => {
        expect(dog).toEqual('a random dog image url');
      });
  });
});
