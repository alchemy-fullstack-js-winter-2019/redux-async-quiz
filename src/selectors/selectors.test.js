import { getDogs } from './dogs';

describe('selectors', () => {
  it('can get a dog', () => {
    const state = {
      dogs: { dog: 'pic' }
    };

    const results = getDogs(state);

    expect(results).toEqual('pic');
  });
});
