import React from 'react';
import renderer from 'react-test-renderer';
import Image from './Image';

describe('Image comp', () => {
  it('matches a snap', () => {
    const tree = renderer.create(
      <Image url="imageurl" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});   
