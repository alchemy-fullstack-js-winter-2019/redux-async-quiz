import React from 'react';
import renderer from 'react-test-renderer';
import Image from './Image';

describe('Image', () => {
  it('matches a snapshot', () => {
    const url = 'https://images.dog.ceo/breeds/beagle/n02088364_17935.jpg';
    const tree = renderer.create(
      <Image url={url}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
