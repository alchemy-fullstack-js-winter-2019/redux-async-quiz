import React from 'react';
import PropTypes from 'prop-types';

function Image({ dog }) {
  return (
    <img src={dog} />
  );
}
Image.propTypes = {
  dog: PropTypes.object.isRequired
};

export default Image;
