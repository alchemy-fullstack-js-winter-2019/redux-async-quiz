import React from 'react';
import PropTypes from 'prop-types';
import Load from './Load';

const Image = ({ dogImage, fetch }) => {
  return (
    <div>
      <Load fetch={fetch}/>
      <br/>
      <img src={dogImage}/>
    </div>
  );
};

Image.propTypes = {
  dogImage: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired
};

export default Image;
