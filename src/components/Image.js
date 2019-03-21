import React from 'react';
import PropTypes from 'prop-types';
import Load from './Load';

function Image({ dogImage, fetch, loading }) {
  return (
    <>
    {loading ? <h1> Is still loading...</h1> :
      <div>
        <h3> Dog Image </h3>
        <p><img src= {dogImage} />/</p>
        <Load fetch={fetch}/>
      </div>
    }
    </>
  );
}

Image.propTypes = {
  dogImage: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Image;
