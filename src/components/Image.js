import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Main = styled.main`
  button {
    display: block;
    padding: 10px;
    font-size: 1.25em;
    border-radius: 50px;
    margin-bottom: 5px;
  }
`;

function Image({ dog, loading, fetch }) {
  return (
    <>
      {loading && <h2>Loading...</h2>}
      {loading === false && 
      <Main>
        <button onClick={fetch}>New image</button>
        <img src={dog.message} style={{ width: '300px' }}/> 
      </Main>
      }
    </>
  );
}

Image.propTypes = {
  dog: PropTypes.object,
  loading: PropTypes.bool,
  fetch: PropTypes.func
};

export default Image;
