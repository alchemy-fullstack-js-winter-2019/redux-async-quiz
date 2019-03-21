import React from 'react';
import renderer from 'react-test-renderer';
import Display from './Display';

describe('display component tests', () => {
  it('renders the display component correctly', () => {
    const fetch = jest.fn();
    const tree = renderer.create(
      <Display
        fetch={fetch}
        image='something'
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
