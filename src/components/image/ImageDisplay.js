import React from 'react';
import PropTypes from 'prop-types';
import './ImageDisplay.css';

function ImageDisplay({ dogImage }) {
  return (
    <>
      <h1>Dog Images</h1>
      <img src={dogImage} />
    </>
  );
}


ImageDisplay.propTypes = {
  dogImage: PropTypes.string.isRequired
};

export default ImageDisplay;
