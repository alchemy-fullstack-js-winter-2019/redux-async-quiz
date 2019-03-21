import React from 'react';
import renderer from 'react-test-renderer';
import Image from './Image';

describe('image component test', () => {
  it('renders an image', () => {
    const tree = renderer.create(
      <Image />
    );
    expect(tree).toMatchSnapshot;
  });
});
