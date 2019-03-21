import React from 'react';
import renderer from 'react-test-renderer';
import Image from './Image';

describe('Image test', () => {
  it('matches a snapshot', () => {
    
    const dogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3485.jpg';

    const tree = renderer.create(
      <Image  
        dogImage={dogImage} 
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
