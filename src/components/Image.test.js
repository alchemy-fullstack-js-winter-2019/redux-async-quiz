import React from 'react';
import Image from './Image';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Home snapshot', () => {
  it('can match a snapshot', () => {
    const tree = shallow(
      <Image 
        dog={{}}
        loading={false}
        fetch={jest.fn()}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
