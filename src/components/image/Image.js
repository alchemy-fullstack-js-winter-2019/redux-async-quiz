import React from 'react';
import PropTypes from 'prop-types';




function Image({ message }) {
  return (
    <>
      <section >
        <img src={message} />
      </section>
    </>
  );
}

Image.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Image;
