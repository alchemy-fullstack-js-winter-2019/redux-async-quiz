import React from 'react';
import PropTypes from 'prop-types';

export default function Image({ imageUrl }) {
  return (
    <img src={imageUrl} />
  );
}

Image.propTypes = {
  imageUrl: PropTypes.string.isRequired
};
