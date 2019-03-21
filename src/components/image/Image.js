import React from 'react';
import PropTypes from 'prop-types';

export default function Image({ dogImage }) {
  return (
    <>
      <img src={dogImage} />
    </>
  );
}

Image.propTypes = {
  dogImage: PropTypes.object.isRequired
};
