import React from 'react';
import renderer from 'react-test-renderer';
import Image from './Image';

describe('Image test', () => {
  it('matches a snapshot', () => {
    
    const dogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3485.jpg';
    const loading = false;
    
    const tree = renderer.create(
      <Image loading={loading}  
        dogImage={dogImage} 
        fetch={fetch}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
