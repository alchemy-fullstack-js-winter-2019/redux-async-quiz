import React from 'react';
import renderer from 'react-test-renderer';
import Image from './Image';

describe('Image', () => {
  it('matches snapshot for Image', () => {
    const img = 'img.com';

    const tree = renderer.create(
      <Image img={img} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
