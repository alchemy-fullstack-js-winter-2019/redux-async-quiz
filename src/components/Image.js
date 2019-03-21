import React from 'react';
import PropTypes from 'prop-types';

function Image({ message, fetch }) {

  return (
    <>
    <main>
      <p>{message}</p>
      <button onClick={fetch}>New Image</button>
    </main>
    </>
  );
}

Image.propTypes = {
  message: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired,
};
export default Image;

