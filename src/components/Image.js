import React from 'react';
import PropTypes from 'prop-types';

function Image({ url }) {
  return (
    <figure>
      <img src={url} alt="picture of a dog" />
    </figure>
  );
}

Image.propTypes = {
  url: PropTypes.string.isRequired
};

export default Image;
