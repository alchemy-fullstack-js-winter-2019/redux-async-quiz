import React from 'react';
import renderer from 'react-test-renderer';
import Image from './Image';
import { MemoryRouter } from 'react-router-dom';

describe('Image', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Image />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

