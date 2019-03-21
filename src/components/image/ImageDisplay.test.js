import React from 'react';
import { shallow } from 'enzyme';
import ImageDisplay from './ImageDisplay';

describe('Display', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<ImageDisplay dogImage={'https://images.dog.ceo/breeds/papillon/n02086910_6931.jpg'}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
