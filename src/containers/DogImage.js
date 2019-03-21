import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDogImage } from '../selectors/image';
import { fetchDog } from '../actions/image';
import Image from '../components/Image';

class DogImage extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <Image {...this.props}/>
    );
  }
}

const mapStateToProps = state => ({
  url: getDogImage(state)
}); 

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchDog());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogImage);
