import React from 'react';
import PropTypes from 'prop-types';

function Image({ dogImage }) {
  return (
    <>
    <h3> Dog Image </h3>
    <p><img src= {dogImage} />/</p>
    </>
  );
}

Image.propTypes = {
  dogImage: PropTypes.string.isRequired
};

export default Image;
