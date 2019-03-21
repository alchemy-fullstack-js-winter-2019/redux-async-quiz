import React from 'react';
import PropTypes from 'prop-types';

function Dog({ image }) {
  return (
    <>
    <p><img src={image} /></p>
    </>
  );
}

Dog.propTypes = {
  image: PropTypes.string.isRequired
};

export default Dog;
