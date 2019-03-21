import React from 'react';
import renderer from 'react-test-renderer';
import Dog from './Dog';

describe('Dog', () => {
  it('matches a snapshot', () => {
    const image = 'image';

    const tree = renderer.create(
      <Dog fetch={jest.fn()} image={image} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
