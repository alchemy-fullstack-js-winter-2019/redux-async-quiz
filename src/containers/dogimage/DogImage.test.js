import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import DogImage from './DogImage';

describe.skip('DogImage', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Provider>
        <DogImage/>
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
