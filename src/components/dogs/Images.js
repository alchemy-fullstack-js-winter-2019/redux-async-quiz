import React from 'react';
import PropTypes from 'prop-types';


export default function DogImages({ image }) {
  return (
    <>
    <h2>DOGGOS</h2>
    <img src={image} />
    </>
  );
}

DogImages.propTypes = {
  image: PropTypes.string.isRequired
};

