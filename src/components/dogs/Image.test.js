import React from 'react';
import { shallow } from 'enzyme';
import Image from './Image';

describe('Image', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <Image dogImage={'https://images.dog.ceo/breeds/cairn/n02096177_599.jpg'} 
        fetch={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
