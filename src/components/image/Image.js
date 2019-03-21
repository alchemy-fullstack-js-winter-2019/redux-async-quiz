import React from 'react';
import PropTypes from 'prop-types';
import Load from './Load';

function Image({ image, fetch, loading }) {
  return (
    <>
    {loading ? <p>Loading....</p> :
      <div>
        <p>{image}</p>
        {/* <img src={image}/> */}
        <Load fetch={fetch} />
      </div>}
    </>
  );
}
Image.propTypes = {
  image: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Image;
