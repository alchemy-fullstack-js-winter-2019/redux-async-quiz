import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDogImage } from '../actions/dogs';
import { getImageUrl } from '../selectors/dogs';
import Image from '../components/Image';
// import { getImage } from '../services/dogs';

class DogImage extends PureComponent {
  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
    // getImage();
  }
  render() {
    return (
      <>
      <h1>HI</h1>
      <Image imageUrl={this.props.imageUrl}/>
      </>

    );
  }
}
const mapStateToProps = state => ({
  imageUrl: getImageUrl(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchDogImage());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogImage);
