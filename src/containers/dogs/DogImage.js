import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getImg } from '../../selectors/dogs';
import { fetchDogImg } from '../../actions/dogs';
import Image from '../../components/dogs/Image';

class DogImage extends PureComponent {
  static propTypes = {
    img: PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return <Image {...this.props} />;
  }
}

const mapStateToProps = state => ({
  img: getImg(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchDogImg());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogImage);
