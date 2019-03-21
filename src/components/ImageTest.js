import React from 'react';
import { shallow } from 'enzyme';
import Image from './Image';

describe('Image test', () => {
  let wrapper;
  let newImage;
  beforeEach(() => {
    newImage = jest.fn();
    wrapper = shallow(
      <Image
        message='img'
        onClick={jest.fn()}
      />
    );
  });

  it('calls the createNote function on sumbit', () => {
    wrapper.find('button').simulate('click', {
      preventDefault: jest.fn()
    });

    expect(newImage).toHaveBeenCalled();
  });
});
