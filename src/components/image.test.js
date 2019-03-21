import React from 'react';
import renderer from 'react-test-renderer';
import Image from './Image';
describe('Image componeent test', () => {
  it('renders the image component correctly', () => {

    const tree = renderer.create(
      <Image /> 

    );
    expect(tree).toMatchSnapshot();
  });
});
